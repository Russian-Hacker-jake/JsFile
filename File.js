//this function allows you to create files/save files with content in them
function SaveFile(blob,filename,path)
{
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
}
//this function downloads files
function DownloadFile(url, filename)
{
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = function(e) {
        if (this.status == 200) {
            SaveFile(this.response, filename);
        }
    xhr.send();
}
}
//this function will find the latest file in a directory,Keep in mind that the directory must be a directory
function DownloadLatestFile(urldirectory)
{
    //gets all the files in the url directory
    var xhr = new XMLHttpRequest();
    xhr.open('GET', urldirectory, true);
    xhr.responseType = 'blob';
    xhr.onload = function(e) {
        if (this.status == 200) {
            //list files in a variable
            var files = this.response;
            //gets the last file in the list
            var lastfile = files[files.length-1];
            //gets the name of the last file
            var lastfilename = lastfile.name;
            return lastfilename;
        }
    xhr.send();
}
}