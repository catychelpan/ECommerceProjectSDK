import p_img1 from './p_img1.jpg'
import p_img2_1 from './p_img2_1.jpg'
import p_img2_2 from './p_img2_2.jpg'
import p_img2_3 from './p_img2_3.jpg'
import p_img2_4 from './p_img2_4.jpg'
import p_img3 from './p_img3.jpg'
import p_img4 from './p_img4.jpg'
import p_img5_1 from './p_img5_1.jpg'
import p_img5_2 from './p_img5_2.jpg'
import p_img6 from './p_img6.jpg'
import p_img7 from './p_img7.jpg'
import p_img8 from './p_img8.jpg'
import p_img9 from './p_img9.jpg'
import p_img10 from './p_img10.jpg'
import p_img11 from './p_img11.jpg'
import p_img12_1 from './p_img12_1.jpg'
import p_img12_2 from './p_img12_2.jpg'
import p_img13 from './p_img13.jpg'
import p_img14 from './p_img14.jpg'
import p_img15 from './p_img15.jpg'
import p_img16 from './p_img16.jpg'
import p_img17 from './p_img17.jpg'
import p_img18 from './p_img18.jpg'
import p_img19 from './p_img19.jpg'
import p_img20 from './p_img20.jpg'
import p_img21 from './p_img21.jpg'
import p_img22 from './p_img22.jpg'
import p_img23_1 from './p_img23_1.jpg'
import p_img23_2 from './p_img23_2.jpg'
import p_img24 from './p_img24.jpg'
import p_img25 from './p_img25.jpg'
import p_img26 from './p_img26.jpg'
import p_img27 from './p_img27.jpg'
import p_img28 from './p_img28.jpg'
import p_img29 from './p_img29.jpg'
import p_img30 from './p_img30.jpg'



import logo from './logo.png'
import hero_img from './hero_img.jpg'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.jpg'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
    {
        _id: "aaaaa",
        name: "I Who Have Never Known A Men",
        author: "Jacqueline Harpman",
        description: "Deep underground, thirty-nine women live imprisoned in a cage. Watched over by guards, the women have no memory of how they got there, no notion of time, and only a vague recollection of their lives before. As the burn of electric light merges day into night and numberless years pass, a young girl—the fortieth prisoner—sits alone and outcast in the corner. Soon she will show herself to be the key to the others' escape and survival in the strange world that awaits them above ground.",
        price: 15,
        image: [p_img1],
        category: "Fiction",
        subCategory: "Dystopia",
        sizes: ["Hardcover", "Paperback"],
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "aaaab",
        name: "Babel: Or the Necessity of Violence",
        author: "R. F Kuang",
        description: "The plot is focused on four new students at the institute, their growing awareness that their academic efforts maintain Britain's imperialist supremacy, their debate over how to prevent the First Opium War, and the use of violence.",
        price: 20,
        image: [p_img2_1,p_img2_2,p_img2_3,p_img2_4],
        category: "Fiction",
        subCategory: "Fantasy",
        sizes: ["Hardcover", "Paperback"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "Brave New World",
        author: "Aldous Huxley",
        description: "Brave New World is a dystopian novel by Aldous Huxley, published in 1932. It envisions a future world where technology, conditioning, and a rigid caste system control every aspect of human life.",
        price: 21,
        image: [p_img3],
        category: "Fiction",
        subCategory: "Dystopia",
        sizes: ["Paperback"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "aaaad",
        name: "The Memory Police",
        author: "Yōko Ogawa",
        description: "The story follows a novelist on an island under the control of the Memory Police. An unknown force causes the people of the island to collectively 'forget' and lose their attachment to objects or concepts, e.g. hats, perfume, birds and ribbon.",
        price: 12,
        image: [p_img4],
        category: "Fiction",
        subCategory: "Magical Realism",
        sizes: ["Hardcover"],
        date: 1716621345448,
        bestseller: false
    },
    {
        _id: "aaaae",
        name: "Strange House",
        author: "Uketsu",
        description: "What is the true purpose behind the house’s disturbing design? And what happened to the former owners who disappeared without a trace? When a body suddenly appears and a young woman reaches out about a second house, it soon becomes clear that the writer and his friend may be in over their heads.",
        price: 24,
        image: [p_img5_1, p_img5_2],
        category: "Fiction",
        subCategory: "Thriller",
        sizes: ["Hardcover", "Paperback"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaaf",
        name: "The God Of the Woods",
        author: "Liz Moore",
        description: "Early morning, August 1975: a camp counselor discovers an empty bunk. Its occupant, Barbara Van Laar, has gone missing. Barbara isn’t just any thirteen-year-old: she’s the daughter of the family that owns the summer camp and employs most of the region’s residents. And this isn’t the first time a Van Laar child has disappeared. Barbara’s older brother similarly vanished fourteen years ago, never to be found. As a panicked search begins, a thrilling drama unfolds. Chasing down the layered secrets of the Van Laar family and the blue-collar community working in its shadow.",
        price: 12,
        image: [p_img6],
        category: "Fiction",
        subCategory: "Thriller",
        sizes: ["Hardcover", "Paperback"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaag",
        name: "Intermezzo",
        author: "Sally Rooney",
        description: "Aside from the fact that they are brothers, Peter and Ivan Koubek seem to have little in common. For two grieving brothers and the people they love, this is a new interlude—a period of desire, despair, and possibility; a chance to find out how much one life might hold inside itself without breaking.",
        price: 17,
        image: [p_img7],
        category: "Fiction",
        subCategory: "Contemporary",
        sizes: ["Paperback"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaah",
        name: "Hello Beautiful",
        author: "Ann Napolitano",
        description: "William Waters grew up in a house silenced by tragedy, where his parents could hardly bear to look at him, much less love him—so when he meets the spirited and ambitious Julia Padavano in his freshman year of college, it’s as if the world has lit up around him. With Julia comes her family, as she and her three sisters are inseparable: Sylvie, the family’s dreamer, is happiest with her nose in a book; Cecelia is a free-spirited artist; and Emeline patiently takes care of them all. With the Padavanos, William experiences a newfound contentment; every moment in their house is filled with loving chaos.",
        price: 14,
        image: [p_img8],
        category: "Fiction",
        subCategory: "Historical Fiction",
        sizes: ["Hardcover"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaai",
        name: "Kim Ji-young, Born 1982",
        author: "Cho Nam-Joo",
        description: "Kim Jiyoung, Born 1982 is the life story of one young woman born at the end of the twentieth century and raises questions about endemic misogyny and institutional oppression that are relevant to us all. Riveting, original and uncompromising, this is the most important book to have emerged from South Korea since Han Kang’s The Vegetarian.",
        price: 12,
        image: [p_img9],
        category: "Fiction",
        subCategory: "Feminism",
        sizes: ["Hardcover", "Paperback"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaaj",
        name: "Almond",
        author: "Sohn Won-Pyung",
        description: "A neurodivergent teen's life transforms after a violent incident, forging an unexpected friendship that helps him embrace courage and emotions.",
        price: 24,
        image: [p_img10],
        category: "Fiction",
        subCategory: "Contemporary",
        sizes: ["Hardcover"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaak",
        name: "The Woman Destroyed",
        author: "Simone de Beauvoir",
        description: "Three long stories that draw the reader into the lives of three women, all past their first youth, all facing unexpected crises.",
        price: 18,
        image: [p_img11],
        category: "Fiction",
        subCategory: "Feminism",
        sizes: ["Hardcover", "Paperback"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaal",
        name: "Anxious People",
        author: "Fredrik Backman",
        description: "Humorous, compassionate, and wise, Anxious People is an ingeniously constructed story about the enduring power of friendship, forgiveness, and hope—the things that save us, even in the most anxious of times.",
        price: 13,
        image: [p_img12_1, p_img12_2],
        category: "Fiction",
        subCategory: "Contemporary",
        sizes: ["Hardcover"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaam",
        name: "Remarkably Bright Creatures",
        author: "Shelby Van Pelt",
        description: "Shelby Van Pelt's debut novel is a gentle reminder that sometimes taking a hard look at the past can help uncover a future that once felt impossible.",
        price: 12,
        image: [p_img13],
        category: "Fiction",
        subCategory: "Contemporary",
        sizes: ["Hardcover", "Paperback"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaan",
        name: "Circe",
        author: "Madeline Miller",
        description: "Circe is a 2018 mythic fantasy novel by American writer Madeline Miller. Set during the Greek Heroic Age, it is an adaptation of various Greek myths.",
        price: 20,
        image: [p_img14],
        category: "Fiction",
        subCategory: "Fantasy",
        sizes: ["Hardcover", "Paperback"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaao",
        name: "A Room of One's Own",
        author: "Virginia Woolf",
        description: "A Room of One's Own is an extended essay by Virginia Woolf. First published on the 24th of October, 1929, the essay was based on a series of lectures she delivered at Newnham College and Girton College, two women's colleges at Cambridge University in October 1928. While this extended essay in fact employs a fictional narrator and narrative to explore women both as writers and characters in fiction, the manuscript for the delivery of the series of lectures, titled Women and Fiction, and hence the essay, are considered nonfiction.",
        price: 14,
        image: [p_img15],
        category: "Non-Fiction",
        subCategory: "Feminism",
        sizes: ["Hardcover", "Paperback"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaap",
        name: "The Castle",
        author: "Franz Kafka",
        description: "Left unfinished by Kafka in 1922 and not published until 1926, two years after his death, The Castle is the haunting tale of K.’s relentless, unavailing struggle with an inscrutable authority in order to gain access to the Castle. Scrupulously following the fluidity and breathlessness of the sparsely punctuated original manuscript, Mark Harman’s new translation reveals levels of comedy, energy, and visual power, previously unknown to English language readers.",
        price: 13,
        image: [p_img16],
        category: "Fiction",
        subCategory: "Philosophy",
        sizes: ["Hardcover", "Paperback"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaaq",
        name: "The Fall",
        author: "Albert Camus",
        description: "The Fall explores themes of innocence, imprisonment, non-existence, and truth. In a eulogy to Albert Camus, existentialist philosopher Jean-Paul Sartre described the novel as perhaps the most beautiful and the least understood of Camus' books.",
        price: 12,
        image: [p_img17],
        category: "Fiction",
        subCategory: "Philosophy",
        sizes: ["Paperback"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaar",
        name: "The Letters of Vincent van Gogh",
        author: "Vincent van Gogh",
        description: "A new selection of post-impressionist painter Vincent Van Gough's letters, The Letters of Vincent van Gogh put a human face on one of the most haunting figures in modern Western culture. In this Penguin Classics edition, the letters are selected and edited by Ronald de Leeuw, and translated by Arnold Pomerans in Penguin Classics.",
        price: 18,
        image: [p_img18],
        category: "Non-Fiction",
        subCategory: "Art",
        sizes: ["Hardcover", "Paperback"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaas",
        name: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        description: "A pilot stranded in the desert awakes one morning to see, standing before him, the most extraordinary little fellow. Please, draw me a sheep. And the pilot realizes that when life's events are too difficult to understand, there is no choice but to succumb to their mysteries. He pulls out pencil and paper... And thus begins this wise and enchanting fable that, in teaching the secret of what is really important in life, has changed forever the world for its readers.",
        price: 12,
        image: [p_img19],
        category: "Fiction",
        subCategory: "Fantasy",
        sizes: ["Hardcover", "Paperback"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaat",
        name: "On Earth We're Briefly Gorgeous",
        author: "Ocean Vuong",
        description: "With stunning urgency and grace, Ocean Vuong writes of people caught between disparate worlds, and asks how we heal and rescue one another without forsaking who we are. The question of how to survive, and how to make of it a kind of joy, powers the most important debut novel of many years.",
        price: 16,
        image: [p_img20],
        category: "Fiction",
        subCategory: "Contemporary",
        sizes: ["Hardcover", "Paperback"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaau",
        name: "Giovanni’s Room",
        author: "James Baldwin",
        description: "Set in the contemporary Paris of American expatraites, liasons, and violence, a young man finds himself caught between desire and conventional morality. James Baldwin's brilliant narrative delves into the mystery of loving with a sharp, probing imagination, and he creates a moving, highly controversial story of death and passion that reveals the unspoken complexities of the heart.",
        price: 20,
        image: [p_img21],
        category: "Fiction",
        subCategory: "Contemporary",
        sizes: ["Paperback"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaav",
        name: "The Handmaid's Tale",
        author: "Margaret Atwood",
        description: "What is the true purpose behind the house’s disturbing design? And what happened to the former owners who disappeared without a trace? When a body suddenly appears and a young woman reaches out about a second house, it soon becomes clear that the writer and his friend may be in over their heads.",
        price: 24,
        image: [p_img22],
        category: "Fiction",
        subCategory: "Dystopia",
        sizes: ["Hardcover", "Paperback"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaaw",
        name: "The Five Wishes of Mr. Murray McBride",
        author: "Joe Siple",
        description: "With all his family and friends gone, one-hundred-year-old Murray McBride is looking for a reason to live. He finds it in Jason Cashman, a ten-year-old boy with a terminal heart defect and a list of five things he wants to do before he dies. Together, they race against the limited time each has left, ticking off wishes one by one. Along the way, Murray remembers what it's like to be young, and Jason fights for the opportunity to grow old. But when tragedy strikes, their worlds are turned upside-down, and an unexpected gift is the only thing that can make Jason's final wish come true.",
        price: 22,
        image: [p_img23_1, p_img23_2],
        category: "Fiction",
        subCategory: "Contemporary",
        sizes: ["Hardcover", "Paperback"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaax",
        name: "The Sea",
        author: "John Banville",
        description: "The narrator is Max Morden, a middle-aged Irishman who, soon after his wife’s death, has gone back to the seaside town where he spent his summer holidays as a child—a retreat from the grief, anger, and numbness of his life without her. But it is also a return to the place where he met the Graces, the well-heeled vacationing family with whom he experienced the strange suddenness of both love and death for the first time.",
        price: 20,
        image: [p_img24],
        category: "Fiction",
        subCategory: "Contemporary",
        sizes: ["Hardcover"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaay",
        name: "The Discomfort of Evening",
        author: "Lucas Rijneveld",
        description: "Jas lives with her devout farming family in the rural Netherlands. One winter's day, her older brother joins an ice skating trip; resentful at being left alone, she makes a perverse plea to God; he never returns. As grief overwhelms the farm, Jas succumbs to a vortex of increasingly disturbing fantasies, watching her family disintegrate into a darkness that threatens to derail them all.",
        price: 15,
        image: [p_img25],
        category: "Fiction",
        subCategory: "Thriller",
        sizes: ["Hardcover", "Paperback"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaaz",
        name: "How To Read A Book",
        author: "Monica Wood",
        description: "How to Read a Book  is an unsparingly honest and profoundly hopeful story about letting go of guilt, seizing second chances, and the power of books to change our lives. With the heart, wit, grace, and depth of understanding that has characterized her work, Monica Wood illuminates the decisions that define a life and the kindnesses that make life worth living.",
        price: 24,
        image: [p_img26],
        category: "Fiction",
        subCategory: "Contemporary",
        sizes: ["Hardcover", "Paperback"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaba",
        name: "Eleanor Oliphant Is Completely Fine",
        author: "Gail Honeyman",
        description: "Soon to be a major motion picture produced by Reese Witherspoon, Eleanor Oliphant Is Completely Fine is the smart, warm, and uplifting story of an out-of-the-ordinary heroine whose deadpan weirdness and unconscious wit make for an irresistible journey as she realizes...The only way to survive is to open your heart.",
        price: 22,
        image: [p_img27],
        category: "Fiction",
        subCategory: "Mental Health",
        sizes: ["Paperback"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaabb",
        name: "Raise Your Soul: A Personal History of Resistance",
        author: "Yanis Varoufakis",
        description: "Dramatic in scope and deep in feeling, Raise Your Soul is an intimate portrait of three generations caught up in the whirlwind of history. It is also a remarkable narrative spanning one hundred years, beginning in post-colonial Egypt in the 1920s, and then tracing Greece’s tumultuous century through Nazi occupation, communist resistance, civil war, Cold War fracture, fascist dictatorship, socialist revival and present-day economic crisis.",
        price: 24,
        image: [p_img28],
        category: "Non-Fiction",
        subCategory: "History",
        sizes: ["Hardcover", "Paperback"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaabc",
        name: "Dead and Alive",
        author: "Zadie Smith",
        description: "Throughout this thrilling collection, Zadie Smith shows us once again her unrivalled ability to think through critically and humanely some of the most urgent preoccupations and tendencies of our troubled times.",
        price: 14,
        image: [p_img29],
        category: "Non-Fiction",
        subCategory: "Art",
        sizes: ["Hardcover", "Paperback"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaabd",
        name: "The Monsters We Make: Murder, Obsession, and the Rise of Criminal Profiling",
        author: "Rachel Corbett",
        description: " In The Monsters We Make, prize-winning author Rachel Corbett explores how criminal profiling became one of society’s most seductive and quixotic undertakings through six significant moments in its history. She delves into Arthur Conan Doyle’s work on the Jack the Ripper case, Harvard psychologist Henry A. Murray’s pioneering profile of Adolf Hitler and his later experiments on his student Ted Kaczynski, and the FBI’s famed Behavioral Science Unit’s investigations of such killers as Ted Bundy.",
        price: 17,
        image: [p_img30],
        category: "Non-Fiction",
        subCategory: "History",
        sizes: ["Paperback"],
        date: 1716622345448,
        bestseller: false
    },

]