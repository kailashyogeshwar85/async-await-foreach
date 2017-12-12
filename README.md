# async-await-foreach
Sequential Execution of async functions using async and await

## Installation
```bash
    npm install async-await-foreach
```

## Usage
``` javascript
  const asyncForEach = require('async-await-foreach');
  const storyIds = [1, 2, 3 ];

  function makeApiCall(item){
      return request.getAsync('https://api.example.com/stories/item');
  }

  asyncForEach(storyIds, async (item, index, array) => {
      await makeApiCall(item);
  })
```

**Contact Me**: kailashyogeshwar85@gmail.com

**Happy Coding** :sunglasses: :heart: