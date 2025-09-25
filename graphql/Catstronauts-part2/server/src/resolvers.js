const resolvers = {
    Query: {
        tracksForHome: (_, __, {datasources}) => {
            return datasources.trackAPI.getTracksForHome()
        }
    },
        Track: {
            author: ({authorId}, _, {datasources}) => {
                return datasources.trackAPI.getAuthor(authorId)
            }
        }
}

export default resolvers