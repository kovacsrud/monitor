using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DIP
{
    public class RosszUserService
    {
        private MysqlDB mysql=new MysqlDB();

        public void UserMentes(string user)
        {
            mysql.DbMentes(user);
        }
    }
}
