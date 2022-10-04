let word: string = 'I am a boy';
console.log(word);

type Excluded = [
    hope: string,
    love: string,
    peace: string
];
let myArray: Excluded = ['hope', 'love', 'peace '];
myArray.forEach(item => {
    console.log(`${item} is one of the best quality a human can have`);
})
type CaptionType = {
    bestSaying: string,
    worstSaying: string
};
type HomeType = {
    name: string,
    id: number,
    caption: CaptionType,
    hobby: {
        dancing: string,
        singing: string,
        sporting: string
    };
}

let home: HomeType = {
    name:  'Maine',
    id: 22_40_89,
    caption: CaptionType {
        bestSaying: 'I love the world',
        worstSaying: 'I love you'
    },
    hobby: ['dancing', 'singing', 'sporting']
};

    export{};