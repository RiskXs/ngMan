using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ngMan.Common.Model;

namespace ngMan.API.Controllers
{
    [Route("api/[controller]")]
    public class ArticleController:Controller
    {
        [HttpGet("{articleId}")]
        public Article GetArticle(int articleId)
        {
            return new Article
            {
                Title = "My Firt Article",
                Content = "This is my firt blog article!"
            };
        }
    }
}
