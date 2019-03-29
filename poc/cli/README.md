# Data Format


```json
[{"id":1,"style":"","blocks":[{"content":{"title":"Bronze age"}},{"content":{"title":"Iron age"}},{"content":{"title":"Middle ages"}},{"content":{"title":"Early modern period"}}]},{"id":2,"style":"","blocks":[{"type":"card","content":{"title":"hello","content":"content"}},{"type":"card","content":{"title":"hello","content":"content"}},{"type":"card","content":{"title":"hello","content":"content"}}]},{"id":3,"blocks":[{"type":"molist","content":{"title":"hello","styles":{"height":"200px"},"items":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}}]}]
```

Format JSON:

```
[
  {
    'style': '',
    'id': 1,
    'blocks': [
      {
        'content': {
          'title': 'Bronze age'
        }
      },
      {
        'content': {
          'title': 'Iron age'
        }
      },
      {
        'content': {
          'title': 'Middle ages'
        }
      },
      {
        'content': {
          'title': 'Early modern period'
        }
      }
    ]
  },
  {
    'style': '',
    'id': 2,
    'blocks': [
      {
        'content': {
          'content': 'content',
          'title': 'hello'
        },
        'type': 'card'
      },
      {
        'content': {
          'content': 'content',
          'title': 'hello'
        },
        'type': 'card'
      },
      {
        'content': {
          'content': 'content',
          'title': 'hello'
        },
        'type': 'card'
      }
    ]
  },
  {
    'id': 3,
    'blocks': [
      {
        'content': {
          'items': [
            1,
            2,
            3,
            4
          ],
          'styles': {
            'height': '200px'
          },
          'title': 'hello'
        },
        'type': 'molist'
      }
    ]
  }
];

```
