document.addEventListener('DOMContentLoaded', () => {
    const emojis = [
        {
            emoji: '💀',
            name: 'Skull',
            meaning: 'This emoji represents a skull and is typically used to denote death, danger, or dark humor. It can also be used in contexts related to Halloween or to express extreme shock or an exaggerated humorous reaction.',
            usage: 'Used to signify death, danger, extreme shock, or dark humor. Often seen in Halloween contexts or as a reaction to something shocking.',
            design: 'The emoji typically shows a white skull with prominent eye sockets, a nasal cavity, and visible teeth. The design may vary slightly across different platforms but maintains the same essential elements.',
            technical: 'Unicode Code: U+1F480 HTML Code: &#x1F480; Supported Version: Emoji 1.0 (released in 2015), Unicode 6.0 Supported Platforms: This emoji is supported across most modern operating systems and platforms, including iOS, Android, Windows, and macOS.'
        },
        {
            emoji: '🏴‍☠️',
            name: 'Pirate Flag',
            meaning: 'This emoji represents a pirate flag, typically used to signify pirate themes, adventure, or a rebellious spirit.',
            usage: 'Used in contexts related to pirates, adventure, or rebellion. Can also be used humorously to signify a rogue or daring attitude.',
            design: 'The emoji shows a black flag with a white skull and crossbones, the traditional symbol of pirates. The design may vary slightly across different platforms but the core elements remain consistent.',
            technical: 'Unicode Code: U+1F3F4 200D 2620 FE0F HTML Code: &#x1F3F4;&#x200D;&#x2620;&#xFE0F; Supported Version: Emoji 5.0 (released in 2017), Unicode 10.0 Supported Platforms: This emoji is supported across most modern operating systems and platforms, including iOS, Android, Windows, and macOS.'
        },
        {
            emoji: '🕱',
            name: 'Skull and Crossbones',
            meaning: 'This emoji depicts a skull and crossbones, representing poison, death, or extreme danger.',
            usage: 'Used to denote poison, extreme danger, or death. Commonly seen on warning labels for toxic substances.',
            design: 'The emoji shows a white skull with crossbones behind it, typically on a black background to enhance the warning effect.',
            technical: 'Unicode Code: U+1F571 HTML Code: &#x1F571; Supported Version: Emoji 1.0 (released in 2015), Unicode 6.0 Supported Platforms: This emoji is supported across most modern operating systems and platforms, including iOS, Android, Windows, and macOS.'
        },
        {
            emoji: '☠',
            name: 'Skull and Crossbones',
            meaning: 'This emoji represents danger, poison, or death, depicted with a skull and crossbones.',
            usage: 'Used to signify danger, poison, or death, commonly used on warning labels.',
            design: 'The emoji shows a white skull with crossbones. The design may vary slightly across different platforms but maintains the same essential elements.',
            technical: 'Unicode Code: U+2620 HTML Code: &#x2620; Supported Version: Unicode 1.1 (released in 1993) Supported Platforms: This emoji is supported across most modern operating systems and platforms, including iOS, Android, Windows, and macOS.'
        },
        {
            emoji: '👀',
            name: 'Eyes',
            meaning: 'This emoji depicts a pair of eyes, often used to indicate looking, watching, or attention.',
            usage: 'Used to signify looking at something, curiosity, or attention. Can also be used humorously to suggest being watched or noticing something.',
            design: 'The emoji shows two eyes looking to the left. The design may vary slightly across different platforms but maintains the same essential elements.',
            technical: 'Unicode Code: U+1F440 HTML Code: &#x1F440; Supported Version: Emoji 1.0 (released in 2015), Unicode 6.0 Supported Platforms: This emoji is supported across most modern operating systems and platforms, including iOS, Android, Windows, and macOS.'
        },
        {
            emoji: '🏁',
            name: 'Chequered Flag',
            meaning: 'This emoji represents a chequered flag, typically used to signify the finish line, end of a race, or completion of a task.',
            usage: 'Used in racing contexts or to denote completion of a task or goal.',
            design: 'The emoji shows a black and white chequered flag. The design may vary slightly across different platforms but maintains the same essential elements.',
            technical: 'Unicode Code: U+1F3C1 HTML Code: &#x1F3C1; Supported Version: Emoji 1.0 (released in 2015), Unicode 6.0 Supported Platforms: This emoji is supported across most modern operating systems and platforms, including iOS, Android, Windows, and macOS.'
        },
        {
            emoji: '🔪',
            name: 'Kitchen Knife',
            meaning: 'This emoji represents a kitchen knife, which can signify cooking or something sinister.',
            usage: 'Used to denote cooking, cutting, or something sinister. Can also be used in horror contexts.',
            design: 'The emoji shows a silver blade with a brown or black handle. The design may vary slightly across different platforms but maintains the same essential elements.',
            technical: 'Unicode Code: U+1F52A HTML Code: &#x1F52A; Supported Version: Emoji 1.0 (released in 2015), Unicode 6.0 Supported Platforms: This emoji is supported across most modern operating systems and platforms, including iOS, Android, Windows, and macOS.'
        },
        {
            emoji: '🩻',
            name: 'X-Ray',
            meaning: 'This emoji represents an X-ray, typically used to signify medical imaging, healthcare, or something transparent.',
            usage: 'Used in medical contexts, to denote transparency, or to represent health-related topics.',
            design: 'The emoji shows an image of a skeletal structure as seen in an X-ray scan. The design may vary slightly across different platforms but maintains the same essential elements.',
            technical: 'Unicode Code: U+1FA7B HTML Code: &#x1FA7B; Supported Version: Emoji 13.0 (released in 2020), Unicode 13.0 Supported Platforms: This emoji is supported across most modern operating systems and platforms, including iOS, Android, Windows, and macOS.'
        },
        {
            emoji: '🧟',
            name: 'Zombie',
            meaning: 'This emoji represents a zombie, often used to signify horror, Halloween, or a state of mindless action.',
            usage: 'Used in contexts related to horror, Halloween, or to describe someone who is very tired or out of it.',
            design: 'The emoji shows a zombie with decaying skin, often with a blank expression. The design may vary slightly across different platforms but maintains the same essential elements.',
            technical: 'Unicode Code: U+1F9DF HTML Code: &#x1F9DF; Supported Version: Emoji 5.0 (released in 2017), Unicode 10.0 Supported Platforms: This emoji is supported across most modern operating systems and platforms, including iOS, Android, Windows, and macOS.'
        },
        {
            emoji: '🧙',
            name: 'Mage',
            meaning: 'This emoji represents a mage or wizard, typically used to signify magic, fantasy, or a magical character.',
            usage: 'Used in contexts related to magic, fantasy, or to describe someone who is very skilled or knowledgeable.',
            design: 'The emoji shows a person in a wizard’s hat, often holding a wand. The design may vary slightly across different platforms but maintains the same essential elements.',
            technical: 'Unicode Code: U+1F9D9 HTML Code: &#x1F9D9; Supported Version: Emoji 5.0 (released in 2017), Unicode 10.0 Supported Platforms: This emoji is supported across most modern operating systems and platforms, including iOS, Android, Windows, and macOS.'
        },
        {
            emoji: '🧟‍♀️',
            name: 'Woman Zombie',
            meaning: 'This emoji represents a female zombie, often used to signify horror, Halloween, or a state of mindless action.',
            usage: 'Used in contexts related to horror, Halloween, or to describe a woman who is very tired or out of it.',
            design: 'The emoji shows a female zombie with decaying skin, often with a blank expression. The design may vary slightly across different platforms but maintains the same essential elements.',
            technical: 'Unicode Code: U+1F9DF U+200D U+2640 HTML Code: &#x1F9DF;&#x200D;&#x2640; Supported Version: Emoji 5.0 (released in 2017), Unicode 10.0 Supported Platforms: This emoji is supported across most modern operating systems and platforms, including iOS, Android, Windows, and macOS.'
        },
        {
            emoji: '🧟‍♂️',
            name: 'Man Zombie',
            meaning: 'This emoji represents a male zombie, often used to signify horror, Halloween, or a state of mindless action.',
            usage: 'Used in contexts related to horror, Halloween, or to describe a man who is very tired or out of it.',
            design: 'The emoji shows a male zombie with decaying skin, often with a blank expression. The design may vary slightly across different platforms but maintains the same essential elements.',
            technical: 'Unicode Code: U+1F9DF U+200D U+2642 HTML Code: &#x1F9DF;&#x200D;&#x2642; Supported Version: Emoji 5.0 (released in 2017), Unicode 10.0 Supported Platforms: This emoji is supported across most modern operating systems and platforms, including iOS, Android, Windows, and macOS.'
        },
        {
            emoji: '🧌',
            name: 'Troll',
            meaning: 'This emoji represents a troll, often used to signify fantasy creatures, internet trolls, or something mischievous.',
            usage: 'Used in contexts related to fantasy, online trolling, or to describe someone behaving badly online.',
            design: 'The emoji shows a troll, typically depicted with a large nose, tusks, and a menacing expression. The design may vary slightly across different platforms but maintains the same essential elements.',
            technical: 'Unicode Code: U+1F9CC HTML Code: &#x1F9CC; Supported Version: Emoji 14.0 (released in 2021), Unicode 14.0 Supported Platforms: This emoji is supported across most modern operating systems and platforms, including iOS, Android, Windows, and macOS.'
        }
        // 继续添加更多的 emoji 对象
    ];

    const emojiList = document.querySelector('.emoji-gallery');
    const emojiDetails = document.getElementById('emoji-details');

    if (emojiList && emojiDetails) {
        emojis.forEach(emoji => {
            const emojiItem = document.createElement('div');
            emojiItem.classList.add('emoji-item');
            emojiItem.innerHTML = `
                <span>${emoji.emoji}</span>
                <button onclick="copyToClipboard('${emoji.emoji}')">复制</button>
            `;
            emojiItem.title = emoji.name;

            emojiItem.addEventListener('click', () => {
                const selected = document.querySelector('.emoji-item.selected');
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
                <button class="copy-btn" onclick="copyToClipboard('${emoji.emoji}')">复制</button>
                <p><strong>meaning:</strong> ${emoji.meaning}</p>
                <p><strong>usage:</strong> ${emoji.usage}</p>
                <p><strong>design:</strong> ${emoji.design}</p>
                <p><strong>technical:</strong> ${emoji.technical}</p>
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
            document.querySelector('.emoji-item').classList.add('selected');
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
