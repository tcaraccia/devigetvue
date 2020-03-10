const url = (limit = 10) => `https://www.reddit.com/r/subreddit/top/.json?limit=${limit}`;
const fetchPosts = async (count) => {
  let posts = [];
  try {
    const res = await fetch(url(count));
    if (res.status === 200) {
      const jsonRes = await res.json();
      posts = jsonRes.data.children;
    }
  } catch (error) {
    console.error(error);
    return {
      error: true,
      message: error.message,
    };
  }
  return posts;
};

export default { fetchPosts };
