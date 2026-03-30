using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DIP
{
    public class JoUserService
    {
        private IDatabase database;

        public JoUserService(IDatabase database)
        {
            this.database = database;
        }

        public void UserMentes(string user)
        {
            database.Mentes(user);
        }
    }
}
