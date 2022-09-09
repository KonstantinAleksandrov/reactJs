import { useMemo } from "react"

export const useSortedPost =(posts,sort)=>{
    const sortedPosts = useMemo(()=>{
        if(sort){
          return (
            [...posts].sort((a,b)=>{
              if(a[sort] > b[sort]){
                return 1
              }
              if(a[sort] < b[sort]){
                return -1
              }
              if(a[sort] === b[sort]){
                return 0
              }
            })
          )
        }else{
          return posts
        }
      },[sort,posts])
      return sortedPosts
}

export const usePosts = (posts,sort,query)=>{
    const sortedPosts = useSortedPost(posts,sort)
    const sortedAndSearchPosts = useMemo(()=>{
        return sortedPosts.filter((item)=>item.title.toLowerCase().includes(query))
      },[query,sortedPosts])

      return sortedAndSearchPosts
}