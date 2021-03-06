const path = require('path')
const cProcess = require('child_process')
const chalk = require('chalk')
const word = encodeURI(Array.prototype.slice.call(process.argv, 2).join(' '));
const chromeSh = path.join(__dirname, '/bin/chrome.sh')
if (['-v', '--version','-V'].indexOf(word.toLowerCase()) > -1) {
    console.log(require('./package.json').version);
    return;
}
cProcess.exec(`sh  ${chromeSh}`, (error, stdout, stderr) => {
    console.log(`提示：${chalk.yellow('使用此命令前请确保chrome是关闭的')}`);
    if (error) {
        console.log(`${chalk.red(error)}`)
        return
    }
    if (stdout) console.log(`stdout: ${chalk.green(stdout)}`)
    if (stderr) console.log(`stderr: ${chalk.stdout(stderr)}`)
    console.log(`提示：${chalk.yellow('当启动chrome后，页面顶部出现：您使用的是不受支持的命令行标记：--disable-web-security。稳定性和安全性会有所下降时，即为成功')}`)
})