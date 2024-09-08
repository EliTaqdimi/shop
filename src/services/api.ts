import axios from "axios";

const clientArticle = axios.create({
  baseURL: "http://localhost:8002",
});

export async function getProductArticles() {
  const { data } = await clientArticle.get("/articles");
  return data;
}

export async function getProductArticle(id: string | number) {
  const { data } = await clientArticle.get(`/articles/${id}`);
  return data;
}

export async function login(username: string, password: string) {
  try {
    const { data } = await clientArticle({
      method: "post",
      url: "/login",
      data: {
        username,
        password,
      },
    });
    return data;
  } catch (error) {
    console.error("Login error:", error); // نمایش خطا در لاگین
    throw error; // می‌توانید خطا را به کامپوننت خود منتقل کنید و پیامی به کاربر نشان دهید
  }
}
