import { ActionContext } from 'vuex';
import BlogService from '@/services/blogService';
import BlogState from '@/types/blog';
import Blog from '@/types/blog';

export const BlogStore = {
  state: {
    blogs: [{} as Blog],
  },
  getters: {
    getBlog: (state: BlogState) => (id: string) => {
      return state.blogs.filter(b => b.id === id);
    },
    getBlogs(state: BlogState): Blog[] {
      return state.blogs;
    },
  },
  mutations: {
    changeBlog(state: BlogState, newBlog: Blog): void {
      const index = state.blogs.findIndex((blog: Blog) => blog.id === newBlog.id);
      state.blogs[index] = newBlog;
      return;
    },
    addBlog(state: BlogState, newBlog: Blog): void {
      state.blogs.push(newBlog);
      return;
    },
    refreshBlogs(state: BlogState, blogs: Blog[]): void {
      state.blogs = blogs;
      return;
    }
  },
  actions: {
    changeBlog(context: ActionContext<Blog, Blog>, newBlog: Blog): void {
      context.commit('changeBlog', newBlog);
    },
    async loadBlogs(context: ActionContext<Blog, Blog>): Promise<void> {
      const blogs = await BlogService.getBlogs();
      context.commit('refreshBlogs', blogs)
      return;
    }
  },
};
