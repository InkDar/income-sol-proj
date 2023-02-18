import api from "@/shared/utils/api";
import Blog from "@/types/blog";

class BlogService {
  getBlogs = async (): Promise<Blog[]> => {
    const { data: blogs } = await api.get({
      url: 'blogs',
    })
    return blogs;
  }

  getBlog = async (id: string): Promise<Blog> => {
    const blog = await api.get({
      url: `blogs/${id}`,
    })
    return blog;
  }
}

export default new BlogService();
