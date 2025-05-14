const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const { exec } = require('child_process');

// Run the build for Squarespace
console.log('Building for Squarespace...');
exec('npm run build:squarespace', (error, stdout, stderr) => {
  if (error) {
    console.error(`Build error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Build stderr: ${stderr}`);
  }
  console.log(`Build stdout: ${stdout}`);
  
  // Create a zip file for Squarespace upload
  console.log('Creating zip file for Squarespace...');
  
  const output = fs.createWriteStream(path.join(__dirname, 'firstclasscare-squarespace.zip'));
  const archive = archiver('zip', {
    zlib: { level: 9 } // Maximum compression
  });
  
  output.on('close', function() {
    console.log(`Archive created: ${archive.pointer()} total bytes`);
    console.log('Zip file is ready for upload to Squarespace');
    console.log('Upload instructions:');
    console.log('1. Log into your Squarespace account');
    console.log('2. Go to Settings > Advanced > Code Injection');
    console.log('3. In the "Header" section, add the following:');
    console.log('   <script src="/bundle.[hash].js" defer></script>');
    console.log('   (Replace [hash] with the actual filename from your build)');
    console.log('4. Save the changes');
    console.log('5. Upload your images and assets to the Squarespace file manager');
    console.log('6. Link from your Squarespace pages to your React routes');
    console.log('Done!');
  });
  
  archive.on('error', function(err) {
    throw err;
  });
  
  archive.pipe(output);
  
  // Add the build directory contents to the zip
  archive.directory(path.join(__dirname, 'squarespace-build'), false);
  
  archive.finalize();
}); 