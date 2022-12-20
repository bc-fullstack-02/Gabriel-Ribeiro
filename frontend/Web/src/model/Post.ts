
export interface Post {
    _id: string,
    title: string,
    description: string,
    image: string,
    userId : string,
    profile: string,
    comments: [],
    likes: string[],
    likedByUser ?: boolean;
  } 