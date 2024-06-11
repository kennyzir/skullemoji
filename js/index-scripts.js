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
            emoji: '☠',
            name: 'Skull and Crossbones',
            meaning: 'This emoji represents a skull and crossbones, often used to denote danger, death, or poison.',
            usage: 'Used to signify danger, death, or poison. Often seen in contexts related to hazardous materials.',
            design: 'The emoji shows a skull with two crossed bones behind it. The design may vary slightly across different platforms but the core elements remain consistent.',
            technical: 'Unicode Code: U+2620 HTML Code: &#x2620; Supported Version: Emoji 1.0 (released in 2015), Unicode 6.0 Supported Platforms: This emoji is supported across most modern operating systems and platforms, including iOS, Android, Windows, and macOS.'
        },
        {
            emoji: '🕱',
            name: 'Black Skull and Crossbones',
            meaning: 'This emoji represents a black skull and crossbones, used to denote extreme danger or toxicity.',
            usage: 'Used to signify extreme danger or toxicity. Often seen in contexts related to highly hazardous materials.',
            design: 'The emoji shows a black skull with two crossed bones behind it. The design may vary slightly across different platforms but the core elements remain consistent.',
            technical: 'Unicode Code: U+1F571 HTML Code: &#x1F571; Supported Version: Emoji 1.0 (released in 2015), Unicode 6.0 Supported Platforms: This emoji is supported across most modern operating systems and platforms, including iOS, Android, Windows, and macOS.'
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
                <p><strong>含义:</strong> ${emoji.meaning}</p>
                <p><strong>用法:</strong> ${emoji.usage}</p>
                <p><strong>设计:</strong> ${emoji.design}</p>
                <p><strong>技术:</strong> ${emoji.technical}</p>
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
