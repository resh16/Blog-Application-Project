using BlogPageProject.Data;
using BlogPageProject.Model;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogPageProject.Repository
{

   
    public class BlogRepository: IBlogRepository
    {
        private readonly BlogContext _context;
        public BlogRepository(BlogContext context)
        {
            _context = context;
        }
        public async Task<List<BlogModel>> GetAllBlogsAsync()
        {
            var records = await _context.blogModels.Select(x => new BlogModel()
            {
                Id = x.Id,
                Title = x.Title,
                Content = x.Content
            }).ToListAsync();

            return records;

        }

        public async Task<BlogModel> GetBlogByIdAsync(int blogId)
        {
            var records = await _context.blogModels.Where(x => x.Id == blogId).Select(x => new BlogModel()
            {
                Id = x.Id,
                Title = x.Title,
                Content = x.Content
            }).FirstOrDefaultAsync();

            return records;

        }

        public async Task<int> AddBlogAsync(BlogModel blogModel)
        {
            var blog = new Blog()
            {
                Title = blogModel.Title,
                Content = blogModel.Content
            };

            _context.blogModels.Add(blog);
            await _context.SaveChangesAsync();

            return blog.Id;

        }

        public async Task UpdateBlogAsync(int blogId, BlogModel blogModel)
        {
            var blog = await _context.blogModels.FindAsync(blogId);
            if (blog != null)
            {
                blog.Title = blogModel.Title;
                blog.Content = blogModel.Content;

                await _context.SaveChangesAsync();
            }

            

        }

        public async Task DeleteBlogAsync(int blogId)
        {
            var blog = new Blog() { Id = blogId };

            _context.blogModels.Remove(blog);
            await _context.SaveChangesAsync();
            



        }

        public async Task UpdateBlogPatchAsync(int blogId, JsonPatchDocument blogModel)
        {
            var blog = await _context.blogModels.FindAsync(blogId);
            if (blog != null)
            {
                blogModel.ApplyTo(blog);
                await _context.SaveChangesAsync();

                
            }



        }


    }
}
