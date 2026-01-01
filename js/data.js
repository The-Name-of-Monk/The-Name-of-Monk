/* js/data.js - Updated with Correct Narrative Classifications */
const galleryData = [
    {
        id: 1,
        title: "Rule of St. Benedict",
        image: "images/01.jpg",
        creator: "Benedict of Nursia",
        year: "c. 530 AD",
        type: "Manuscript / Text",
        origin: "Italy (Monte Cassino)",
        source: "The Bodleian Libraries",
        link: "https://digital.bodleian.ox.ac.uk/objects/89572a39-b6c0-469c-a370-d3b51e01d1de",
        
        // ★★★ NEW: Narrative Classifications ★★★
        evolution: "The Rule",
        mental: "The Spirit",

        shortDesc: "The Rule of Saint Benedict is a book of precepts written in 516 by Benedict of Nursia for monks living communally under the authority of an abbot.",
        mediumDesc: "This seminal text established the foundational principles of Western monasticism: poverty, chastity, and obedience. It strictly regulated the monk's day, dividing it between prayer, work, and study.",
        longDesc: "Essentially, the Rule created a 'technology of the self' where the individual identity was subsumed by the collective discipline of the order. It marks the starting point of our exhibition's trajectory: strict control over the body and the mind.",

        simple: {
            short: "This is an ancient rule book for monks living together in a monastery.",
            medium: "It gave them strict rules to follow: own nothing, do not marry, and always obey the leader. It also planned their whole day, telling them exactly when to pray and when to work.",
            long: "Basically, this book taught monks how to live a disciplined life. It is the beginning of our story, showing how people controlled themselves to focus entirely on spiritual life."
        },

        complex: {
            short: "The Regula Benedicti constitutes the foundational codification of cenobitic monasticism, defining the administrative and spiritual praxis of the cloister.",
            medium: "It instituted the tripartite vows while enforcing a rigid horarium that partitioned the circadian rhythm into distinct periods of Divine Office (Opus Dei), manual labor, and lectio divina.",
            long: "Foucaultian analysis suggests the Rule functions as a disciplinary apparatus, wherein subjective agency is relinquished for collective homogeneity. It serves as the ascetic baseline against which the subsequent liberation of the 'Monk' archetype is measured."
        }
    },
    {
        id: 2,
        title: "Matisse's Jazz",
        image: "images/02.jpg",
        creator: "Henri Matisse",
        year: "1947",
        type: "Print",
        origin: "France",
        source: "The Metropolitan Museum of Art",
        link: "https://www.metmuseum.org/art/collection/search/353770",
        
        evolution: "The Improvisation",
        mental: "The Spirit",

        shortDesc: "Henri Matisse’s 'Jazz' is a limited-edition artist’s book containing prints of colorful cut-paper collages.",
        mediumDesc: "Created towards the end of his life using the 'cut-out' technique, Matisse used scissors to carve directly into color, mirroring the improvisation of jazz music.",
        longDesc: "The title 'Jazz' reflects the rhythmic, syncopated nature of the composition. It marks the transition in our narrative from utility to pure, expressive freedom, cutting through the rigid history of art like a improvised melody.",

        simple: {
            short: "This is a colorful art book made by Henri Matisse using paper cut-outs instead of paint.",
            medium: "Matisse made this when he was older. He used scissors to 'draw' with colored paper, just like a jazz musician plays with notes.",
            long: "He named it 'Jazz' because the pictures feel free and lively. It shows how art became fun and expressive, moving away from strict rules."
        },

        complex: {
            short: "Matisse’s 'Jazz' represents a paradigm shift in 20th-century aesthetics, utilizing the 'papiers découpés' (paper cut-out) technique.",
            medium: "This synthesis of drawing and color parallels the syncopated deconstruction found in bebop jazz. Matisse bypasses the mediation of the brush to carve directly into chromatic fields.",
            long: "The nomenclature 'Jazz' signifies a semiotic alignment with improvisation. Within our framework, it demarcates the transcendence of utilitarian limitation towards pure, abstract expressionism."
        }
    },
    {
        id: 3,
        title: "The Misericord",
        image: "images/03.jpg",
        creator: "Unknown",
        year: "1375-1400",
        type: "Misericord",
        origin: "East Anglia",
        source: "Victoria and Albert Museum",
        link: "https://collections.vam.ac.uk/item/O48617/misericord-unknown/",
        
        evolution: "The Rule",
        mental: "The Spirit",

        shortDesc: "A misericord, or 'mercy seat', is a small wooden shelf on the underside of a folding church seat.",
        mediumDesc: "It was designed to offer support to monks who had to stand during long periods of prayer, allowing them to lean while appearing to stand.",
        longDesc: "This object embodies the tension between strict discipline and human limitation. It is a physical manifestation of the 'Spirit' narrative—finding a hidden space for comfort within a rigid structural framework.",

        simple: {
            short: "This is a small wooden ledge hidden under a church seat, known as a 'mercy seat'.",
            medium: "Monks had to stand for hours during prayer. This ledge let them lean back and rest a little bit without anyone noticing.",
            long: "It shows that even with strict rules, people found ways to be comfortable. It is a secret compromise between obeying the rules and being human."
        },

        complex: {
            short: "The misericord serves as a liturgical architectural subversion, providing physical alleviation during the Divine Office.",
            medium: "While the Rule mandated standing, this 'misericordia' (act of mercy) allowed the monastic body to inhabit a liminal state between standing and sitting.",
            long: "It represents a structural negotiation between ascetic ideal and physiological reality, creating a sanctioned space for bodily relief within the rigid geometry of the choir stall."
        }
    },
    {
        id: 4,
        title: "Medieval Leather Patten",
        image: "images/04.jpg",
        creator: "Unknown",
        year: "1430-1460",
        type: "Patten",
        origin: "England",
        source: "Victoria and Albert Museum",
        link: "https://collections.vam.ac.uk/item/O107720/patten-unknown/",
        
        evolution: "The Utility",
        mental: "The Echo",

        shortDesc: "Pattens were protective overshoes worn in the Middle Ages to lift the wearer above the mud and dirt.",
        mediumDesc: "These are the direct functional ancestors of the modern Monk Strap shoe. The strap mechanism allowed for quick adjustment and practical utility.",
        longDesc: "Originally designed purely for protection, the strap would later evolve from a necessity of the mud into the decorative buckles of high fashion, bridging the gap between 'The Utility' and 'The Identity'.",

        simple: {
            short: "This is an old leather overshoe used to keep feet dry in muddy streets.",
            medium: "People wore these over their normal shoes. The strap on top helped keep it tight and secure while walking.",
            long: "This simple strap is the grandfather of modern buckle shoes. It started as a tool for dirt, but eventually became a style for fashion."
        },

        complex: {
            short: "The patten functions as a medieval prophylactic for footwear, elevating the wearer above terrestrial filth.",
            medium: "Its morphological significance lies in the strap retention system, a utilitarian precursor to the aestheticized closure of the modern Monk Strap shoe.",
            long: "This artifact traces the phylogenetic evolution of footwear from purely pragmatic functionality to stylistic affectation, marking the first step in the secularization of the strap."
        }
    },
    {
        id: 5,
        title: "Video \"I Mean You\"",
        image: "images/05.jpg",
        creator: "Thelonious Monk Quartet",
        year: "1969",
        type: "Video",
        origin: "France",
        source: "YouTube",
        link: "https://www.youtube.com/watch?v=kROre63J0Lw&t=5s",
        
        evolution: "The Improvisation",
        mental: "The Echo",

        shortDesc: "A live performance recording of Thelonious Monk performing his classic composition 'I Mean You'.",
        mediumDesc: "In this video, we witness Monk's unique physical relationship with the piano—his percussive touch, his dancing, and his use of silence.",
        longDesc: "This performance stands in direct opposition to the regulated chanting of the Benedictine monks. It represents the ultimate expression of identity unbound, where the rules of music are learned only to be broken.",

        simple: {
            short: "A video of the jazz musician Thelonious Monk playing the piano.",
            medium: "You can see his unique style: he hits the keys hard, dances around, and plays with a lot of energy.",
            long: "This is very different from the quiet, strict monks of the past. It shows how the name 'Monk' eventually became associated with loud, free, and creative music."
        },

        complex: {
            short: "Archival footage documenting the kinetic and auditory idiosyncrasies of Thelonious Monk's performance style.",
            medium: "Monk's percussive attack and dissonant phrasing deconstruct the harmonic conventions of Western music, prioritizing rhythmic innovation over melodic fluidity.",
            long: "The performance acts as a visual thesis on 'The Improvisation', demonstrating how the disciplined body of the ascetic monk has been transformed into the liberated, expressive body of the jazz virtuoso."
        }
    },
    {
        id: 6,
        title: "Double Monk Straps",
        image: "images/06.jpg",
        creator: "Louis Lampertsdörfer",
        year: "2025",
        type: "Shoes",
        origin: "Germany",
        source: "World Championship of Shoemaking",
        link: "https://shoegazing.com/2025/07/04/world-championships-of-shoemaking-2025-all-competition-shoes-pt-1/#number1",
        
        evolution: "The Utility",
        mental: "The Identity",

        shortDesc: "A contemporary pair of Double Monk Strap shoes, characterized by the absence of lacing and the use of dual buckles.",
        mediumDesc: "Here, the 'Utility' of the medieval strap has completely transformed into aesthetic 'Identity'. The double buckle serves as a stylistic declaration of luxury.",
        longDesc: "This item represents the modern liberation of style. The name 'Monk' no longer implies poverty or silence, but has become a symbol of sartorial elegance and individual choice in the 21st century.",

        simple: {
            short: "A modern pair of fancy men's shoes with two buckles instead of shoelaces.",
            medium: "These buckles are mostly for style, to look good. They show how the old monk strap changed into something rich and fashionable.",
            long: "Now, wearing 'Monk' shoes doesn't mean you are poor or religious. It means you have style and money. The meaning of the word has completely flipped."
        },

        complex: {
            short: "A contemporary iteration of the Double Monk Strap, representing the apex of bespoke shoemaking craftsmanship.",
            medium: "The gemination of the buckle serves a purely semiotic function, signaling status and aesthetic discernment rather than functional necessity.",
            long: "This artifact concludes the 'Utility' narrative arc, demonstrating the complete commodification and gentrification of the monastic aesthetic within the luxury fashion ecosystem."
        }
    },
    {
        id: 7,
        title: "Benedictine Antiphonary",
        image: "images/07.jpg",
        creator: "Belbello da Pavia and collaborators",
        year: "1467-70",
        type: "Manuscript",
        origin: "Italy",
        source: "The Metropolitan Museum of Art",
        link: "https://www.metmuseum.org/art/collection/search/471898",
        
        evolution: "The Rule",
        mental: "The Echo",

        shortDesc: "A large choir book containing the antiphons sung during the Divine Office by a monastic community.",
        mediumDesc: "This artifact represents the collective voice. In the monastery, individual identity was suppressed in favor of the communal chant dictated by the notes on the page.",
        longDesc: "The rigorous notation stands in stark contrast to the improvisational freedom seen in Thelonious Monk's music. Here, the voice is a tool for order, not personal expression.",

        simple: {
            short: "A huge music book used by a whole group of monks to sing together.",
            medium: "The monks all sang the same words at the same time. No one was allowed to sing their own song.",
            long: "This shows how monks did everything as a group. Unlike jazz musicians who play solos, these monks used their voices to follow strict rules."
        },

        complex: {
            short: "An illuminated antiphonal manuscript designed for the communal performance of the Divine Office.",
            medium: "The artifact facilitates the dissolution of individual vocal agency into a unified, liturgical sonic body, governed by strict neumal notation.",
            long: "It creates a sonic architecture of compliance, diametrically opposed to the improvisational agency of jazz. The Antiphonary creates an 'Echo' of discipline that reverberates through the halls of the monastery."
        }
    },
    {
        id: 8,
        title: "Monk Shoes",
        image: "images/08.jpg",
        creator: "Unknown",
        year: "1942-45",
        type: "Shoes",
        origin: "England",
        source: "Northampton Museums",
        link: "https://www.northamptonmuseums.com/directory-record/150/monk",
        
        evolution: "The Utility",
        mental: "The Identity",

        shortDesc: "Mid-20th-century footwear that adopted the monastic strap for general gentleman's wear.",
        mediumDesc: "This transitional object marks the moment the 'Monk' shoe left the cloister and entered the secular world, bridging the gap between utility and fashion.",
        longDesc: "Produced during the war years, it retains a sense of utility but signals the beginning of the strap's journey into popular culture, eventually leading to the high-fashion versions we see today.",

        simple: {
            short: "A pair of shoes from the 1940s that uses a strap instead of laces.",
            medium: "This is when normal people started wearing 'monk' style shoes, not just religious people.",
            long: "It connects the old muddy shoes of the past to the fancy shoes of today. It shows the word 'Monk' starting to become a fashion word."
        },

        complex: {
            short: "A mid-century specimen of the single-strap shoe, illustrating the secular appropriation of monastic attire.",
            medium: "Chronologically situated between the utilitarian patten and the luxury double-strap, this artifact embodies the transition from function to form.",
            long: "It signifies the democratization of the 'Monk' silhouette, detaching the signifier from its religious signified and recontextualizing it within the wardrobe of the modern civilian."
        }
    },
    {
        id: 9,
        title: "A Benedictine Monk",
        image: "images/09.jpg",
        creator: "Circle of Hugo van der Goes",
        year: "ca. 1480s",
        type: "Painting",
        origin: "Netherland",
        source: "The Metropolitan Museum of Art",
        link: "https://www.metmuseum.org/art/collection/search/436522",
        
        evolution: "The Rule",
        mental: "The Identity",

        shortDesc: "A portrait depicting a monk in deep contemplation, adhering to the vow of silence.",
        mediumDesc: "The cowl obscures the face and the posture suggests submission, highlighting the erasure of individual identity within the monastic order.",
        longDesc: "It serves as a baseline for our exhibition: this is where the Monk started—silent, anonymous, and bound by the Rule, before the explosion of identity in the modern era.",

        simple: {
            short: "A painting of a serious monk looking down.",
            medium: "He is wearing a hood that hides his hair and ears. He looks quiet and obedient.",
            long: "This picture shows us what a 'Monk' originally was: someone who didn't want to be famous, who just wanted to follow the rules and pray."
        },

        complex: {
            short: "A devotional portrait attributed to the circle of Hugo van der Goes, capturing the interiority of the monastic subject.",
            medium: "The compositional focus on the downcast gaze and the obscuring cowl visually reinforces the theological imperative of self-abnegation.",
            long: "This image provides the visual thesis for 'The Rule': the suppression of the ego. It stands as the historic antithesis to the celebrity and individuality of the jazz musician featured later in the collection."
        }
    },
    {
        id: 10,
        title: "The Mourner Sculpture",
        image: "images/10.jpg",
        creator: "Etienne Bobillet, Paul Mosselman",
        year: "ca. 1453",
        type: "Sculpture",
        origin: "France",
        source: "The Metropolitan Museum of Art",
        link: "https://www.metmuseum.org/art/collection/search/464366",
        
        evolution: "The Rule",
        mental: "The Identity",

        shortDesc: "One of the famous 'Mourners' from a ducal tomb, depicted in a heavy, hooded cloak.",
        mediumDesc: "The ultimate symbol of anonymity. The monk's face is completely hidden inside the hood, erasing identity to focus solely on the emotion of grief.",
        longDesc: "This contrasts sharply with the 'Portrait of Thelonious Monk', where the individual's face is the focal point. It questions what we lose when we hide our face, and what we gain in spiritual weight.",

        simple: {
            short: "A statue of a person crying, completely covered by a heavy hood.",
            medium: "You can't see the person's face at all. It shows that who they are doesn't matter, only their sadness matters.",
            long: "This is the opposite of a selfie or a portrait. The person is hiding themselves completely, becoming just a shape of sorrow."
        },

        complex: {
            short: "An alabaster pleurant (mourner) from the Burgundian school, characterized by the dramatic drapery of the cowl.",
            medium: "The total obfuscation of the facial features radicalizes the concept of anonymity, reducing the human subject to a vessel for communal mourning.",
            long: "It creates a powerful visual metaphor for the erasure of the 'Self' demanded by the Rule. The identity is subsumed by the fabric of the institution, leaving only the performative act of prayer."
        }
    },
    {
        id: 11,
        title: "The Shoemaker",
        image: "images/11.jpg",
        creator: "David Teniers the Younger",
        year: "ca. 1650",
        type: "Painting",
        origin: "Unknown",
        source: "Northampton Museums",
        link: "https://www.northamptonmuseums.com/directory-record/393/",
        
        evolution: "The Utility",
        mental: "The Identity",

        shortDesc: "A genre painting illustrating the workshop of a cobbler, showing the tools and craft of shoemaking.",
        mediumDesc: "This artwork contextualizes the 'Utility' narrative by showing the labor required to create the straps and buckles that monks (and gentlemen) would wear.",
        longDesc: "It highlights the material reality and craftsmanship behind the metaphorical concept of the 'Monk' shoe, reminding us that every artifact has a maker and a process.",

        simple: {
            short: "A painting of a man making shoes in his messy shop.",
            medium: "It shows all his tools and the hard work it takes to make leather shoes.",
            long: "We often forget that someone has to make the things we wear. This picture reminds us of the workers behind the 'Monk' shoes."
        },

        complex: {
            short: "A genre scene by Teniers depicting the artisanal production of footwear within a 17th-century interior.",
            medium: "The painting foregrounds the materiality of leather and the manual labor of the cobbler, grounding the 'Utility' narrative in economic reality.",
            long: "It serves to demystify the artifact, shifting focus from the consumer of the monk strap to the producer. It emphasizes the techne (craft) required to produce the functional objects of the order."
        }
    },
    {
        id: 12,
        title: "Photography of Thelonious Monk",
        image: "images/12.jpg",
        creator: "Lee Friedlander",
        year: "1957",
        type: "Photography",
        origin: "United States of America",
        source: "The Museum of Modern Art",
        link: "https://www.moma.org/collection/works/57602",
        
        evolution: "The Improvisation",
        mental: "The Spirit",

        shortDesc: "An intimate photograph of jazz pianist Thelonious Monk, capturing him in a moment of reflection or performance.",
        mediumDesc: "Here, the 'Monk' is no longer anonymous. He is the center of attention, a unique genius. The composition highlights his individual style and presence.",
        longDesc: "This image is the antithesis of the 'Mourner Sculpture'. It celebrates the singular 'Spirit' of the jazz age, where the rule is to break the rule and the goal is to be distinct.",

        simple: {
            short: "A photo of the famous jazz musician Thelonious Monk.",
            medium: "He looks cool and unique. The photo shows him as a star, someone special.",
            long: "Unlike the hidden monks of the past, Thelonious Monk wanted to be seen. This photo captures his unique personality."
        },

        complex: {
            short: "A gelatin silver print by Lee Friedlander capturing the jazz icon Thelonious Monk.",
            medium: "The portrait privileges the subjectivity of the artist, framing Monk not as a generic type but as a singular cultural force.",
            long: "It visualizes the transition from the collective anonymity of the cloister to the hyper-individuality of the jazz stage. The lens focuses on the 'aura' of the artist, marking the full liberation of the name 'Monk'."
        }
    },
    {
        id: 13,
        title: "Portrait of Thelonious Monk",
        image: "images/13.jpg",
        creator: "Boris Chaliapin",
        year: "1964",
        type: "Painting",
        origin: "United States of America",
        source: "The Smithsonian Institution",
        link: "https://www.si.edu/object/npg_NPG.78.TC596",
        
        evolution: "The Improvisation",
        mental: "The Identity",

        shortDesc: "The original artwork for the cover of TIME magazine, featuring Thelonious Monk.",
        mediumDesc: "Appearing on the cover of TIME signified that Monk had conquered the cultural mainstream. The 'Name of the Monk' had traveled from secluded cloisters to the pinnacle of pop culture.",
        longDesc: "It represents the triumph of 'The Improvisation'. The face is not hidden; it is broadcast to the world, marking the completion of our narrative journey from anonymity to celebrity.",

        simple: {
            short: "A colorful painting of Thelonious Monk used for the cover of a famous magazine.",
            medium: "Being on this cover meant he was one of the most famous people in America.",
            long: "The word 'Monk' used to mean a quiet person hiding away. Now, it is the name of a superstar everyone knows."
        },

        complex: {
            short: "The original gouache painting for the TIME magazine cover, establishing Monk as a canonical figure in American culture.",
            medium: "The portrait canonizes the jazz musician, placing him within the pantheon of significant historical figures.",
            long: "It represents the ultimate inversion of the Benedictine ideal: rather than erasing the self for God, the 'Monk' here asserts the self for Art. It is the apotheosis of identity."
        }
    },
    {
        id: 14,
        title: "Shoe Buckle",
        image: "images/14.jpg",
        creator: "Thomas Kirkham",
        year: "ca. 1795",
        type: "Shoe Buckle",
        origin: "England",
        source: "Victoria and Albert Museum",
        link: "https://collections.vam.ac.uk/item/O112906/shoe-buckle-kirkham-thomas/",
        
        evolution: "The Utility",
        mental: "The Spirit",

        shortDesc: "An ornate shoe buckle used to fasten footwear before the invention of modern laces.",
        mediumDesc: "In the 18th century, the functional strap of the monk evolved into a platform for jewelry. This buckle is purely decorative, signaling wealth rather than humility.",
        longDesc: "It marks a key point in our 'Utility' timeline where function began to surrender to form, setting the stage for the modern luxury shoe and the aestheticization of the monk strap.",

        simple: {
            short: "A shiny, fancy buckle for old-fashioned shoes.",
            medium: "Long ago, buckles were like jewelry for your feet. They showed that you were rich.",
            long: "This buckle isn't just for holding a shoe tight; it's for showing off. It shows how a simple shoe part became a fashion statement."
        },

        complex: {
            short: "An 18th-century silver shoe buckle, representative of Georgian sartorial excess.",
            medium: "The object transforms the fastening mechanism into a site of conspicuous consumption, prioritizing ornamentation over mere utility.",
            long: "It signifies the 'baroque' phase of the utility narrative, where the humble strap is embellished to the point of opulence, distancing the wearer from the vows of poverty associated with the original monastic order."
        }
    },
    {
        id: 15,
        title: "Album \"Monk's Music\"",
        image: "images/15.jpg",
        creator: "Thelonious Monk Septet",
        year: "1957",
        type: "Album",
        origin: "United States of America",
        source: "Wikipedia",
        link: "https://en.wikipedia.org/wiki/Monk%27s_Music",
        
        evolution: "The Improvisation",
        mental: "The Echo",

        shortDesc: "The cover art for the album 'Monk's Music', featuring Thelonious Monk sitting in a red wagon.",
        mediumDesc: "This image encapsulates the playfulness and rule-breaking nature of the 'Spirit' narrative. A grown man in a suit sitting in a child's wagon—it is absurd, provocative, and distinct.",
        longDesc: "It shows that the 'Rule' of seriousness established by St. Benedict has been completely dismantled by the jazz artist, who finds wisdom in play and absurdity.",

        simple: {
            short: "A funny album cover showing Thelonious Monk sitting in a little red wagon.",
            medium: "Monk is wearing sunglasses and a suit but sitting in a kid's toy. He is being silly on purpose.",
            long: "This shows he didn't care about looking 'proper' or 'serious'. He broke the rules to be himself, which is what jazz is all about."
        },

        complex: {
            short: "The iconic album cover depicting Monk in a red Flyer wagon, defying jazz iconography norms.",
            medium: "The juxtaposition of the formal suit and the infantile prop creates a Dadaist sense of absurdity, challenging the seriousness expected of a 'High Art' composer.",
            long: "It visualizes the concept of 'serious play'. The Monk archetype is re-coded from one of solemnity to one of subversive humor, proving that true liberation involves the freedom to be absurd."
        }
    },
    {
        id: 16,
        title: "Album \"Round About Midnight\"",
        image: "images/16.jpg",
        creator: "Thelonious Monk Quintet",
        year: "1947",
        type: "Album",
        origin: "United States of America",
        source: "The Smithsonian Institution",
        link: "https://www.si.edu/object/round-about-midnight-well-you-neednt:nmah_666391",
        
        evolution: "The Improvisation",
        mental: "The Echo",

        shortDesc: "A seminal jazz record featuring Thelonious Monk's most famous composition, 'Round Midnight'.",
        mediumDesc: "'Round Midnight' is the most recorded jazz standard composed by a jazz musician. It represents the 'Echo'—how the voice of one Monk has reverberated through history.",
        longDesc: "It closes our exhibition by showing how a name becomes a legacy. The Monk is no longer a person or a rule, but a sound that belongs to everyone, echoing through time.",

        simple: {
            short: "A record of Monk's most famous song, 'Round Midnight'.",
            medium: "Many, many musicians have played this song. It is a classic.",
            long: "This record shows how Monk's music spread all over the world. His voice is now an 'echo' that we can still hear today."
        },

        complex: {
            short: "The shellac recording of 'Round Midnight', arguably the most significant standard in the jazz canon.",
            medium: "This artifact represents the dissemination of Monk's harmonic language into the broader musical lexicon. It is the point where individual improvisation becomes collective tradition.",
            long: "The 'Echo' narrative concludes here: the solitary voice of the monk (whether in a cell or at a piano) resonates outwards, becoming a shared cultural heritage that transcends the individual creator."
        }
    }
];