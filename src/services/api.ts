import axios from "axios";

const clientArticle = axios.create({
  baseURL: "http://localhost:8000",
});

export async function getProductArticles() {
  const { data } = await clientArticle.get("/products");
  return data;
}

export async function getProductArticle(id: string | number) {
  const { data } = await clientArticle.get(`/products/${id}`);
  return data;
}

export async function login(username: string, password: string) {
  const { data } = await clientArticle({
    method: "post",
    url: "/login",
    data: {
      username,
      password,
    },
  });
  return data;
}
