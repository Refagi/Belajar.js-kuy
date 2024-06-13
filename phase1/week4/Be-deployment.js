/*
Belajar tentang backend deployment adalah langkah penting dalam pengembangan perangkat lunak, 
terutama jika Kalian bekerja pada aplikasi web atau layanan yang memerlukan backend server. 
Deployment adalah proses meletakkan aplikasi Kalian secara online sehingga dapat diakses oleh pengguna 
atau klien Kalian melalui internet. Berikut adalah beberapa konsep dasar yang perlu Kalian ketahui tentang 
backend deployment:

1. Hosting dan Infrastruktur: Salah satu langkah awal dalam backend deployment adalah memilih tempat atau 
infrastruktur di mana Kalian akan menjalankan backend Kalian. Beberapa pilihan termasuk penyedia cloud 
seperti Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), dan layanan hosting web 
berbasis shared hosting atau virtual private servers (VPS). 
Kalian perlu memahami kebutuhan aplikasi Kalian dan memilih penyedia yang sesuai.

2. Server dan Sistem Operasi: Setelah memilih infrastruktur, Kalian perlu mengonfigurasi server dan sistem
operasi yang akan menjalankan aplikasi Kalian. Ini melibatkan instalasi perangkat lunak server seperti Apache, 
Nginx, atau Node.js, serta konfigurasi lingkungan server yang sesuai.

3. Database: Jika aplikasi Kalian memerlukan penyimpanan data, Kalian perlu mengelola database. 
Ini bisa menjadi database SQL seperti MySQL atau PostgreSQL, atau database NoSQL seperti MongoDB. 
Kalian harus mengonfigurasi dan mengelola database sesuai dengan kebutuhan aplikasi Kalian.

4. Deployment Tools: Ada banyak alat yang dapat membantu Kalian dalam proses deployment, 
seperti Docker untuk mengemas aplikasi Kalian ke dalam wadah yang dapat dipindahkan, 
atau alat manajemen konfigurasi seperti Ansible atau Terraform untuk mengotomatiskan pengaturan dan 
penyebaran server.

5. Continuous Integration dan Continuous Deployment (CI/CD): CI/CD adalah praktik pengembangan perangkat 
lunak di mana perubahan kode secara otomatis diuji, dikompilasi, dan diterapkan ke lingkungan produksi. 
CI/CD dapat mengotomatisasi banyak aspek dari deployment backend, membantu Kalian menerapkan perubahan dengan 
cepat dan dengan risiko yang lebih rendah.

6. Skalabilitas: Selama deployment backend, Kalian perlu mempertimbangkan bagaimana aplikasi akan mengatasi peningkatan 
lalu lintas dan beban. Ini bisa melibatkan konfigurasi server yang skalabel, penggunaan load balancer, 
dan manajemen sesi.

7. Keamanan: Keamanan adalah faktor kunci dalam deployment backend. Kalian perlu mengambil tindakan untuk 
melindungi aplikasi Kalian dari ancaman seperti serangan DDoS, SQL injection, dan kerentanan keamanan lainnya. 
Ini melibatkan pengaturan firewall, enkripsi data, autentikasi, dan otorisasi yang kuat.

8. Monitoring dan Logging: Setelah aplikasi Kalian aktif, Kalian perlu memantau kinerjanya dan memeriksa 
catatan untuk mengidentifikasi masalah atau kesalahan. Alat seperti Prometheus, Grafana, atau solusi 
cloud native seperti AWS CloudWatch dapat membantu Kalian dalam hal ini.

9. Pembaruan dan Pemeliharaan: Deployment backend bukanlah langkah sekali jalan. 
Kalian perlu merencanakan pembaruan perangkat lunak, perbaikan keamanan, dan pemeliharaan rutin untuk 
menjaga aplikasi tetap berjalan lancar.


Belajar tentang backend deployment adalah langkah penting dalam perjalanan menjadi pengembang perangkat 
lunak yang terampil, terutama jika Kalian berencana untuk membangun aplikasi web atau layanan berbasis server. 
Ini adalah proses yang melibatkan banyak aspek, tetapi pemahaman yang baik tentang konsep-konsep dasar 
dapat membantu Kalian dalam perjalanan Kalian.


Logic Nolep (Optional)
Disini kita akan coba deploy Inventory System di railway (cloud service) yang kita pakai sebelumnya. 
Untuk tugas ini opsional jadi kalian boleh ngerjain atau engga juga gapapa.

Create New Repo
Buatlah repo baru di github kalian, dan pindahkan semua file Inventory System ke repo baru. 
Disini kita pisahkan karena khusus project IS yang akan kita deploy ke railway.

contoh repo:
https://github.com/zexoverz/inventory-system


Set Up Production
Sebelum kita deploy, kita perlu bungkus server kita menggunakana env production. 
ada beberapa hal yang perlu di set up.

buatlah file ecosystem.config.json di root project kalian (sejajar dengan package.json)

ecosystem.config.json
{
  "apps": [
    {
      "name": "app",
      "script": "src/index.js",
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "time": true,
      "env": {
        "NODE_ENV": "production"
      }
    }
  ]
}


json ini berfungsi untuk configurasi server kalian di saat production nanti.

lanjut, buat folder bin di root project kalian, dan buatlah file didalamnya createNodejsApp.js
bin/createNodejsApp.js 
#!/usr/bin/env node
const util = require('util');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

// Utility functions
const exec = util.promisify(require('child_process').exec);
async function runCmd(command) {
  try {
    const { stdout, stderr } = await exec(command);
    console.log(stdout);
    console.log(stderr);
  } catch {
    (error) => {
      console.log(error);
    };
  }
}

async function hasYarn() {
  try {
    await execSync('yarnpkg --version', { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

// Validate arguments
if (process.argv.length < 3) {
  console.log('Please specify the target project directory.');
  console.log('For example:');
  console.log('    npx create-nodejs-app my-app');
  console.log('    OR');
  console.log('    npm init nodejs-app my-app');
  process.exit(1);
}

// Define constants
const ownPath = process.cwd();
const folderName = process.argv[2];
const appPath = path.join(ownPath, folderName);
const repo = 'https://github.com/zexoverz/inventory-system';

// Check if directory already exists
try {
  fs.mkdirSync(appPath);
} catch (err) {
  if (err.code === 'EEXIST') {
    console.log('Directory already exists. Please choose another name for the project.');
  } else {
    console.log(err);
  }
  process.exit(1);
}

async function setup() {
  try {
    // Clone repo
    console.log(`Downloading files from repo ${repo}`);
    await runCmd(`git clone --depth 1 ${repo} ${folderName}`);
    console.log('Cloned successfully.');
    console.log('');

    // Change directory
    process.chdir(appPath);

    // Install dependencies
    const useYarn = await hasYarn();
    console.log('Installing dependencies...');
    if (useYarn) {
      await runCmd('yarn install');
    } else {
      await runCmd('npm install');
    }
    console.log('Dependencies installed successfully.');
    console.log();

    // Copy envornment variables
    fs.copyFileSync(path.join(appPath, '.env.example'), path.join(appPath, '.env'));
    console.log('Environment files copied.');

    // Delete .git folder
    await runCmd('npx rimraf ./.git');

    // Remove extra files
    fs.unlinkSync(path.join(appPath, 'CHANGELOG.md'));
    fs.unlinkSync(path.join(appPath, 'CODE_OF_CONDUCT.md'));
    fs.unlinkSync(path.join(appPath, 'CONTRIBUTING.md'));
    fs.unlinkSync(path.join(appPath, 'bin', 'createNodejsApp.js'));
    fs.rmdirSync(path.join(appPath, 'bin'));
    if (!useYarn) {
      fs.unlinkSync(path.join(appPath, 'yarn.lock'));
    }

    console.log('Installation is now complete!');
    console.log();

    console.log('We suggest that you start by typing:');
    console.log(`    cd ${folderName}`);
    console.log(useYarn ? '    yarn dev' : '    npm run dev');
    console.log();
    console.log('Enjoy your production-ready Node.js app, which already supports a large number of ready-made features!');
    console.log('Check README.md for more info.');
  } catch (error) {
    console.log(error);
  }
}

setup();
Fungsi createNodejsApp ini adalah membuat server baru dengan versi yang lebih kecil, 
kita buang file file yang tidak perlu di production agar server kita clean. 
Disini juga kita implementasi set up modules" yang diperlukan sebelum server dijalankan di production.
-
-
Setelah changes Set Up Production, jangan lupa push ke repo kalian. 
disini gua push ke branch master
*/