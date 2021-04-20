# 查询视频分P列表  (avID/bvID转CID)

> http://api.bilibili.com/x/player/pagelist

请求方式：GET

## 示例

查询视频`av13502509`/`BV1ex411J7GE`的分P列表

avID方式：

```shell
curl -G 'http://api.bilibili.com/x/player/pagelist' \
--data-urlencode 'aid=13502509'
```

bvID方式：

```shell
curl -G 'http://api.bilibili.com/x/player/pagelist' \
--data-urlencode 'bvid=BV1ex411J7GE'
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": [{
		"cid": 66445301,
		"page": 1,
		"from": "vupload",
		"part": "00. 宣传短片",
		"duration": 33,
		"vid": "",
		"weblink": "",
		"dimension": {
			"width": 1920,
			"height": 1080,
			"rotate": 0
		}
	}, {
		"cid": 35039663,
		"page": 2,
		"from": "vupload",
		"part": "01. 火柴人与动画师",
		"duration": 133,
		"vid": "",
		"weblink": "",
		"dimension": {
			"width": 1484,
			"height": 1080,
			"rotate": 0
		}
	}, {
		"cid": 35039678,
		"page": 3,
		"from": "vupload",
		"part": "02. 火柴人与动画师 II",
		"duration": 210,
		"vid": "",
		"weblink": "",
		"dimension": {
			"width": 1484,
			"height": 1080,
			"rotate": 0
		}
	}, {
		"cid": 35039693,
		"page": 4,
		"from": "vupload",
		"part": "03. 火柴人与动画师 III",
		"duration": 503,
		"vid": "",
		"weblink": "",
		"dimension": {
			"width": 992,
			"height": 720,
			"rotate": 0
		}
	}, 
	…………
	]
}
```

</details>


