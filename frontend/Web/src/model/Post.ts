
export interface Post {
    _id: string,
    title: string,
    description: string,
    image: string,
    userId : string,
    profile: string,
    comments: string[],
    likes: string[],
    likedByUser ?: boolean;
  } 