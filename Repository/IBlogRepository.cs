using BlogPageProject.Model;
using Microsoft.AspNetCore.JsonPatch;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogPageProject.Repository
{
    public interface IBlogRepository
    {
        Task<List<BlogModel>> GetAllBlogsAsync();
        Task<BlogModel> GetBlogByIdAsync(int blogId);
        Task<int> AddBlogAsync(BlogModel blogModel);
        Task UpdateBlogAsync(int blogId, BlogModel blogModel);

        Task UpdateBlogPatchAsync(int blogId, JsonPatchDocument blogModel);

        Task DeleteBlogAsync(int blogId);


    }
}
