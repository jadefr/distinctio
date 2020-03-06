export default {
  getAllTitlesFromActor: (state) => {
    return state.documents.author()
  },
  getAllSectionsFromTitle: (state) => {
    return state.documents.title
  }
}
