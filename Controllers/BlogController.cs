using BlogPageProject.Model;
using BlogPageProject.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogPageProject.Controllers
{
    [Route("api/blog")]
    [ApiController]
    public class BlogController : ControllerBase
    {

        private readonly IBlogRepository _blogRepository;
        public BlogController(IBlogRepository blogRepository)
        {
            _blogRepository = blogRepository;
        }


        [HttpGet("")]
        public async Task<IActionResult> GetAllBlogs()
        {
            var blogs = await _blogRepository.GetAllBlogsAsync();
            return Ok(blogs);
        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> GetBlogById(int Id)
        {
            var blog = await _blogRepository.GetBlogByIdAsync(Id);
            if (blog == null)
            {
                return NotFound();
            }
            return Ok(blog);
        }

        [HttpPost("")]
        public async Task<IActionResult> AddNewBlog([FromBody] BlogModel blogModel)
        {
            var id = await _blogRepository.AddBlogAsync(blogModel);
            return CreatedAtAction(nameof(GetBlogById), new {id = id, Controller = "books" }, id);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBlog([FromBody] BlogModel blogModel, [FromRoute]int id)
        {
             await _blogRepository.UpdateBlogAsync(id, blogModel);
            return Ok();
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> UpdateBlogPatch([FromBody] JsonPatchDocument blogModel, [FromRoute] int id)
        {
            await _blogRepository.UpdateBlogPatchAsync(id, blogModel);
            return Ok();
        }

        [HttpDelete("{Id}")]
        public async Task<IActionResult> DeleteBlog([FromRoute] int Id)
        {
            await _blogRepository.DeleteBlogAsync(Id);
            return Ok();
        }

    }
}
