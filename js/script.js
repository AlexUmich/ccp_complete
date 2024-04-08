document.getElementById('set').addEventListener('click', function() {
    document.body.style.backgroundColor = '#404147';
    document.body.style.color = '#FFFFFF';
    var paragraphs = document.getElementsByTagName('p');
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.backgroundColor = '#000000';
    }
});

document.getElementById('rand').addEventListener('click', function() {
    var colors = [
        '#ff6347', '#4682b4', '#32cd32', '#ffa500', '#9932cc',
        '#ff69b4', '#00ffff', '#f4a460', '#800080', '#8a2be2',
        '#808000', '#00ff7f', '#ff7f50', '#20b2aa', '#ff4500',
        '#9400d3', '#ff1493', '#008080', '#1e90ff', '#008000',
        '#ffd700', '#008b8b', '#ff6347', '#00ffff', '#0000ff',
        '#808080', '#000000', '#ff00ff', '#800000', '#000080',
        '#ffa07a', '#ff00ff', '#a52a2a', '#00008b', '#800080',
        '#7fff00', '#f0e68c', '#8b008b', '#ff69b4', '#cd5c5c',
        '#ffa500', '#ff6347', '#00ff7f', '#add8e6', '#90ee90',
        '#d3d3d3', '#ffb6c1', '#ffa07a', '#20b2aa', '#9370db',
        '#32cd32', '#0000cd', '#ff00ff', '#800000', '#66cdaa',
        '#000080', '#bdb76b', '#008b8b', '#8a2be2', '#a9a9a9',
        '#a9a9a9', '#006400', '#bdb76b', '#8b008b', '#556b2f',
        '#ff8c00', '#9932cc', '#8b0000', '#e9967a', '#8fbc8f',
        '#483d8b', '#2f4f4f', '#00ced1', '#9400d3', '#ff1493',
        '#00bfff', '#696969', '#1e90ff', '#b22222', '#fffaf0',
        '#228b22', '#ff00ff', '#dcdcdc', '#f8f8ff', '#ffd700',
        '#daa520', '#808080', '#008000', '#adff2f', '#f0fff0',
        '#ff69b4', '#cd5c5c', '#4b0082', '#fffff0', '#f0e68c',
        '#e6e6fa', '#fff0f5', '#7cfc00', '#fffacd', '#add8e6',
        '#f08080', '#e0ffff', '#fafad2', '#d3d3d3', '#90ee90',
        '#ffb6c1', '#ffa07a', '#20b2aa', '#87cefa', '#778899',
        '#b0c4de', '#ffffe0', '#00ff00', '#32cd32', '#faf0e6',
        '#ff00ff', '#800000', '#66cdaa', '#000080', '#bdb76b',
        '#008b8b', '#8a2be2', '#a9a9a9', '#2e8b57', '#fffafa',
        '#00ff7f', '#4682b4', '#d2b48c', '#d8bfd8', '#ff6347',
        '#40e0d0', '#ee82ee', '#f5deb3', '#ffffff', '#f5f5f5',
        '#ffff00', '#9acd32'
      ];      
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    var randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.color = randomColor2;
    var randomColor3 = colors[Math.floor(Math.random() * colors.length)];
    var paragraphs = document.getElementsByTagName('p');
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.backgroundColor = randomColor3;
    }
});

document.getElementById('default').addEventListener('click', function() {
    document.body.style.backgroundColor = '#00cccc';
    document.body.style.color = '#000000';
    var paragraphs = document.getElementsByTagName('p');
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.backgroundColor = '#FF00FF';
    }
});
