using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfJson.model
{
    public class FileItem
    {
        public string FullPath { get; set; }
        public string FileName { get; set; }

        public FileItem()
        {
                
        }

        public FileItem(string fullpath,char separator)
        {
            FullPath = fullpath;
            var e=fullpath.Split(separator);
            FileName = e.Last();
        }
    }
}
