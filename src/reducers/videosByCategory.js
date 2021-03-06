const initialState = { category: '', categories: {} }

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'LIST': {
      const { category } = action.payload
      return { ...state, category }
    }
    case 'VIDEOS_FETCHED': {
      const { category, videos } = action.payload
      const slugs = videos.map(video => video.slug)

      return {
        category, // selected category
        categories: {
          ...state.categories,
          [category]: slugs
        }
      }
    }
    default:
      return state
  }
}

// eg: { category: 'fp', categories: { fp: ['slug-1', 'slug-2'] } }