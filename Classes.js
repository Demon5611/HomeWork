class Comment {
    constructor (text) {
        this.text = text 
        this.voteQty = 0
        }

    upvote() {
        this.voteQty +=1
    }
    static mergeComments (first, second) {
        return `${first} ${second}`
}
}
