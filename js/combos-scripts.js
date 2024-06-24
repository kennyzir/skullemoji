document.addEventListener('DOMContentLoaded', () => {
    const emojis = [
        {
            emoji: '💀',
            name: 'Shiny Skull Emoji',
            meaning: 'A bright and shiny skull emoji, representing something new or valuable.',
            design: 'This emoji has a metallic finish with highlights, giving it a shiny appearance.',
            imgSrc: 'images/combos/shiny_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Realistic Skull Emoji',
            meaning: 'A detailed and realistic depiction of a skull, often used to represent realism in art or design.',
            design: 'This emoji features intricate details and shading, making it look very lifelike.',
            imgSrc: 'images/combos/realistic_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Spinning Skull Emoji',
            meaning: 'A playful and dynamic skull emoji, indicating movement or confusion.',
            design: 'This emoji shows a skull spinning around, with motion lines to emphasize the spinning effect.',
            imgSrc: 'images/combos/spinning_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: '3D Skull Emoji',
            meaning: 'A three-dimensional skull emoji, representing depth and realism.',
            design: 'This emoji has a 3D effect with shadows and highlights, giving it a sense of depth.',
            imgSrc: 'images/combos/3d_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Cartoon Skull Emoji',
            meaning: 'A cute and cartoony skull emoji, often used in a playful or humorous context.',
            design: 'This emoji features a simplified and exaggerated design, making it look cute and fun.',
            imgSrc: 'images/combos/cartoon_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Crying Skull Emoji',
            meaning: 'A skull emoji with tears, representing sadness or mourning.',
            design: 'This emoji shows a skull with tears streaming down, conveying a sense of sorrow.',
            imgSrc: 'images/combos/crying_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Punisher Skull Emoji',
            meaning: 'An intense and fearsome skull emoji, often used to signify strength or determination.',
            design: 'This emoji features a stark, bold design with dark shadows and aggressive lines.',
            imgSrc: 'images/combos/punisher_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Real Life Skull Emoji',
            meaning: 'A highly realistic depiction of a skull, used in contexts requiring anatomical accuracy.',
            design: 'This emoji features lifelike detailing and shading for a true-to-life representation.',
            imgSrc: 'images/combos/real_life_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Evil Skull Emoji',
            meaning: 'A sinister and menacing skull emoji, often used to convey malevolence.',
            design: 'This emoji has sharp features and dark shadows to emphasize its evil nature.',
            imgSrc: 'images/combos/evil_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Flaming Skull Emoji',
            meaning: 'A skull engulfed in flames, symbolizing intense emotion or energy.',
            design: 'This emoji shows a skull with flames coming out of it, representing heat and intensity.',
            imgSrc: 'images/combos/flaming_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Funny Skull Emoji',
            meaning: 'A humorous and whimsical skull emoji, often used in a lighthearted context.',
            design: 'This emoji features a skull with exaggerated features to convey humor.',
            imgSrc: 'images/combos/funny_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'ASCII Skull Emoji',
            meaning: 'A digital and pixelated representation of a skull.',
            design: 'This emoji features a blocky, ASCII art-inspired design.',
            imgSrc: 'images/combos/ASCII_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Babu Metal Skull Emoji',
            meaning: 'A metallic skull emoji, often used to signify strength or toughness.',
            design: 'This emoji has a shiny, metal-like finish.',
            imgSrc: 'images/combos/babu_metal_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Baby Funny Skull Emoji',
            meaning: 'A humorous skull emoji, often used in a light-hearted context.',
            design: 'This emoji features a cute, funny skull.',
            imgSrc: 'images/combos/baby_funny_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Baby Punisher Skull Emoji',
            meaning: 'A cute and powerful skull emoji, representing both innocence and strength.',
            design: 'This emoji combines a baby-like appearance with the iconic punisher design.',
            imgSrc: 'images/combos/baby_punisher_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Black Evil Skull Emoji',
            meaning: 'A dark and menacing skull emoji, often used to represent evil or danger.',
            design: 'This emoji features a black, sinister skull design.',
            imgSrc: 'images/combos/black_evil_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Black Skull Emoji',
            meaning: 'A simple and elegant black skull emoji.',
            design: 'This emoji features a minimalist black skull design.',
            imgSrc: 'images/combos/black_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Clown Funny Skull Emoji',
            meaning: 'A humorous skull emoji with a clownish twist.',
            design: 'This emoji features a skull with exaggerated, clown-like features.',
            imgSrc: 'images/combos/clown_funny_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Cute Evil Skull Emoji',
            meaning: 'A cute yet sinister skull emoji, often used to represent a mix of innocence and mischief.',
            design: 'This emoji features a cute skull with a hint of evil.',
            imgSrc: 'images/combos/cute_evil_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Cute Punisher Skull Emoji',
            meaning: 'A blend of cuteness and toughness, representing both gentleness and strength.',
            design: 'This emoji combines a cute appearance with the iconic punisher design.',
            imgSrc: 'images/combos/cute_punisher_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Cute Shiny Skull Emoji',
            meaning: 'A cute and shiny skull emoji, often used to represent something precious.',
            design: 'This emoji features a cute skull with a shiny, metallic finish.',
            imgSrc: 'images/combos/cute_shiny_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Cute Skull Emoji',
            meaning: 'A simply cute skull emoji, often used in a playful context.',
            design: 'This emoji features a cute, simplified skull design.',
            imgSrc: 'images/combos/cute_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Death Skull Emoji',
            meaning: 'A skull emoji representing death or danger.',
            design: 'This emoji features a traditional skull design, often associated with death.',
            imgSrc: 'images/combos/death_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Eat Skull Emoji with Bones',
            meaning: 'A skull emoji with bones, representing consumption or hunger.',
            design: 'This emoji features a skull with crossed bones, often used in a humorous context.',
            imgSrc: 'images/combos/eat_skull_emoji_with_bones.webp'
        },
        {
            emoji: '💀',
            name: 'Facemask Skull Emoji',
            meaning: 'A skull emoji wearing a facemask, representing health and safety.',
            design: 'This emoji features a skull with a facemask, often used to signify protection.',
            imgSrc: 'images/combos/facemask_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Fat Skull Emoji',
            meaning: 'A chubby skull emoji, often used in a humorous or playful context.',
            design: 'This emoji features a round, chubby skull design.',
            imgSrc: 'images/combos/fat_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Goofy Skull Emoji',
            meaning: 'A silly and goofy skull emoji, often used to represent humor or playfulness.',
            design: 'This emoji features a skull with goofy, exaggerated features.',
            imgSrc: 'images/combos/goofy_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Gun Skull Knife Emoji',
            meaning: 'A skull emoji with a gun and knife, representing danger or aggression.',
            design: 'This emoji features a skull flanked by a gun and knife.',
            imgSrc: 'images/combos/gun_skull_knife_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Skull Emoji Art',
            meaning: 'An artistic representation of a skull emoji, often used in creative contexts.',
            design: 'This emoji features a detailed, artistic skull design.',
            imgSrc: 'images/combos/skull_emoji_art.webp'
        },
        {
            emoji: '💀',
            name: 'Metal Skull Emoji',
            meaning: 'A metallic skull emoji, representing toughness or durability.',
            design: 'This emoji features a shiny, metal-like skull design.',
            imgSrc: 'images/combos/metal_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Pirate Skull Emoji',
            meaning: 'A pirate-themed skull emoji, representing adventure or danger.',
            design: 'This emoji features a skull with a pirate hat and crossbones.',
            imgSrc: 'images/combos/pirate_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Punisher Skull and Crossbones Emoji',
            meaning: 'A powerful and fearsome skull emoji, often used to signify strength or determination.',
            design: 'This emoji features a skull with crossbones, reminiscent of the punisher design.',
            imgSrc: 'images/combos/punisher_skull_and_crossbones_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Purple Skull Emoji',
            meaning: 'A vibrant and colorful skull emoji, often used in playful or creative contexts.',
            design: 'This emoji features a purple skull with unique detailing.',
            imgSrc: 'images/combos/purple_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Real Life Shadow Skull Emoji',
            meaning: 'A realistic skull emoji with shadow detailing, often used to represent mortality or realism.',
            design: 'This emoji features a detailed skull with shadows for a realistic effect.',
            imgSrc: 'images/combos/real_life_shadow_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: '3D Real Life Skull Emoji',
            meaning: 'A highly realistic depiction of a skull, used in contexts requiring anatomical accuracy.',
            design: 'This emoji features lifelike detailing and shading for a true-to-life representation.',
            imgSrc: 'images/combos/3D_real_life_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Sad Skull Emoji',
            meaning: 'A sorrowful skull emoji, often used to convey sadness or disappointment.',
            design: 'This emoji features a skull with a sad expression, emphasizing its sorrowful nature.',
            imgSrc: 'images/combos/sad_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Scary Skull Emoji',
            meaning: 'A frightening skull emoji, often used to convey fear or horror.',
            design: 'This emoji features a skull with a scary expression, adding to its frightful appeal.',
            imgSrc: 'images/combos/scary_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Skeleton Skull Emoji',
            meaning: 'A classic skeleton skull emoji, often used to represent bones or skeletal structures.',
            design: 'This emoji features a traditional skeleton skull, emphasizing its skeletal nature.',
            imgSrc: 'images/combos/skeleton_skull_emoji.webp'
        },
        {
            emoji: '💀',
            name: 'Skull Emoji Keyboard',
            meaning: 'A skull emoji on a keyboard key, representing technology and digital communication.',
            design: 'This emoji features a skull on a keyboard key, emphasizing its digital context.',
            imgSrc: 'images/combos/skull_emoji_keyboard.webp'
        },
        {
            emoji: '💀',
            name: 'Skull Emoji TikTok',
            meaning: 'A trendy skull emoji with TikTok elements, often used to represent social media presence.',
            design: 'This emoji features a skull with TikTok icons, emphasizing its connection to social media.',
            imgSrc: 'images/combos/skull_emoji_tiktok.webp'
        },
        {
            emoji: '💀',
            name: 'Smile Purple Skull Emoji',
            meaning: 'A smiling skull emoji in vibrant purple, often used to convey happiness and uniqueness.',
            design: 'This emoji features a smiling purple skull, highlighting its cheerful and unique nature.',
            imgSrc: 'images/combos/smile_purple_skull_emoji.webp'
        }
    ];

    const emojiList = document.querySelector('.emoji-gallery');
    const emojiDetails = document.getElementById('emoji-details');

    if (emojiList && emojiDetails) {
        emojis.forEach(emoji => {
            const emojiItem = document.createElement('article');
            emojiItem.classList.add('combo');
            emojiItem.innerHTML = `
                <figure>
                    <img src="${emoji.imgSrc}" alt="${emoji.name}">
                    <button onclick="copyToClipboard('${emoji.emoji}')">Copy</button>
                    <figcaption>
                        <h2>${emoji.name}</h2>
                        <p><strong>Meaning:</strong> ${emoji.meaning}</p>
                        <p><strong>Design:</strong> ${emoji.design}</p>
                    </figcaption>
                </figure>
            `;
            emojiItem.title = emoji.name;

            emojiItem.addEventListener('click', () => {
                const selected = document.querySelector('.combo.selected');
                if (selected) {
                    selected.classList.remove('selected');
                }
                emojiItem.classList.add('selected');
                displayEmojiDetails(emoji);
            });

            emojiList.appendChild(emojiItem);
        });

        function displayEmojiDetails(emoji) {
            emojiDetails.innerHTML = `
                <h2>${emoji.name}</h2>
                <p class="emoji-icon">${emoji.emoji}</p>
                <button class="copy-btn" onclick="copyToClipboard('${emoji.emoji}')">Copy</button>
                <p><strong>Meaning:</strong> ${emoji.meaning}</p>
                <p><strong>Design:</strong> ${emoji.design}</p>
            `;
            emojiDetails.classList.add('active');
        }

        window.copyToClipboard = function(text) {
            navigator.clipboard.writeText(text).then(() => {
                alert('Emoji copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        };

        // Load first emoji details by default
        if (emojis.length > 0) {
            displayEmojiDetails(emojis[0]);
            document.querySelector('.combo').classList.add('selected');
        }

        // Load emoji details if hash is present in URL
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.substring(1).replace(/-/g, ' ');
            const emoji = emojis.find(e => e.name.toLowerCase() === hash);
            if (emoji) {
                displayEmojiDetails(emoji);
            }
        });

        // Check for hash on page load
        if (window.location.hash) {
            const hash = window.location.hash.substring(1).replace(/-/g, ' ');
            const emoji = emojis.find(e => e.name.toLowerCase() === hash);
            if (emoji) {
                displayEmojiDetails(emoji);
            }
        }
    }
});
