# 视频流URL

- [视频流URL](#视频流url)
  - [关于视频流获取方式](#关于视频流获取方式)
  - [获取视频流URL（web端）](#获取视频流urlweb端)
    - [关于视频流会员鉴权](#关于视频流会员鉴权)
    - [flv/mp4方式](#flvmp4方式)
      - [视频有分段时](#视频有分段时)
    - [dash方式](#dash方式)
  - [视频的获取](#视频的获取)

---

## 关于视频流获取方式

视频流获取方式有3种，分别是flv模式、低清mp4方式、dash方式

各种模式的特性例举如下

flv方式（fnval=0或fnval=2）：

- 编码：H.264编码

- 格式：存在flv与mp4两种格式
- 分辨率：最高支持4K
- 限速情况：存在限速
- 分段情况：部分视频可能会有分段（尤其是老视频）

低清mp4方式（fnval=1）：

- 编码：H.264编码
- 格式：视频格式固定为mp4
- 分辨率：仅支持240P与360P清晰度
- 限速情况：限速65K/s
- 分段情况：无视频分段

dash方式（fnval=16）：

- 编码：H.264/H.265编码，音频采用aac编码
- 格式：音视频分流，音视频格式固定为m4s（音频为aac格式，视频为mp4）
- 分辨率：最高支持4K
- 限速情况：速度最快（不确定限速）
- 分段情况：无视频分段

## 获取视频流URL（web端）

> http://api.bilibili.com/x/player/playurl

*请求方式：GET*

认证方式：Cookie（SESSDATA）

### 关于视频流会员鉴权

- 获取720P及以上清晰度视频时需要登录（Cookie）

- 获取高帧率（1080P60）/高码率（1080P+）视频时需要有大会员的账号登录（Cookie）

- 获取会员专属视频时需要登录（Cookie）

---

获取的url有效时间为120min，超时失效需要重新获取

**部分视频**会有**分段**，需要特别注意

若视频有分P，仅为单P的视频的url，换P则需更换CID重新获取

---

### flv/mp4方式

**示例：**

**视频无分段时：**

获取视频`av99999999`/`BV1y7411Q7Eq`中的1P（CID=`171776208`）的视频流url，清晰度为1080P+，使用flv方式获取

avID方式：

```shell
curl -G 'http://api.bilibili.com/x/player/playurl' \
--data-urlencode 'avid=99999999' \
--data-urlencode 'cid=171776208' \
--data-urlencode 'qn=112' \
--data-urlencode 'fnval=0' \
--data-urlencode 'fnver=0' \
--data-urlencode 'fourk=1' \
-b 'SESSDATA=xxx'
```

 bvID方式：

```shell
curl -G 'http://api.bilibili.com/x/player/playurl' \
--data-urlencode 'bvid=BV1y7411Q7Eq' \
--data-urlencode 'cid=171776208' \
--data-urlencode 'qn=112' \
--data-urlencode 'fnval=0' \
--data-urlencode 'fnver=0' \
--data-urlencode 'fourk=1' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "from": "local",
        "result": "suee",
        "message": "",
        "quality": 112,
        "format": "hdflv2",
        "timelength": 283701,
        "accept_format": "hdflv2,flv,flv720,flv480,mp4",
        "accept_description": [
            "高清 1080P+",
            "高清 1080P",
            "高清 720P",
            "清晰 480P",
            "流畅 360P"
        ],
        "accept_quality": [
            112,
            80,
            64,
            32,
            16
        ],
        "video_codecid": 7,
        "seek_param": "start",
        "seek_type": "offset",
        "durl": [
            {
                "order": 1,
                "length": 283701,
                "size": 219827828,
                "ahead": "",
                "vhead": "",
                "url": "http://upos-sz-mirrorhw.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-112.flv?e=ig8euxZM2rNcNbhMnwhVhwdlhzK3hzdVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1589565412&gen=playurl&os=hwbv&oi=606631998&trid=e0fa5f9a7610440a871279a28fae85aau&platform=pc&upsig=5f469cb4c190ed54b89bd40cc37eddff&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&logo=80000000",
                "backup_url": [
                    "http://upos-sz-mirrorks3c.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-112.flv?e=ig8euxZM2rNcNbhMnwhVhwdlhzK3hzdVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1589565412&gen=playurl&os=ks3cbv&oi=606631998&trid=e0fa5f9a7610440a871279a28fae85aau&platform=pc&upsig=914ef921c5258e067c382601a4b1f81c&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&logo=40000000"
                ]
            }
        ]
    }
}
```

</details>

#### 视频有分段时

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "from": "local",
        "result": "suee",
        "message": "",
        "quality": 16,
        "format": "flv360",
        "timelength": 1437918,
        "accept_format": "flv,flv720,flv480,flv360",
        "accept_description": [
            "高清 1080P",
            "高清 720P",
            "清晰 480P",
            "流畅 360P"
        ],
        "accept_quality": [
            80,
            64,
            32,
            16
        ],
        "video_codecid": 7,
        "seek_param": "start",
        "seek_type": "offset",
        "durl": [
            {
                "order": 1,
                "length": 364417,
                "size": 23018310,
                "ahead": "",
                "vhead": "",
                "url": "http://upos-sz-mirrorhw.bilivideo.com/upgcxcode/98/24/872498/872498-1-15.flv?e=ig8euxZM2rNcNbRB7zUVhoM17WuBhwdEto8g5X10ugNcXBlqNxHxNEVE5XREto8KqJZHUa6m5J0SqE85tZvEuENvNo8g2ENvNo8i8o859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859r1qXg8gNEVE5XREto8z5JZC2X2gkX5L5F1eTX1jkXlsTXHeux_f2o859IB_&uipk=5&nbs=1&deadline=1589874109&gen=playurl&os=hwbv&oi=1965551630&trid=ceac015d41e04a7b90ec972db710524fu&platform=pc&upsig=f99db2dc9b8c65c245515b29b9ca8b16&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&logo=80000000",
                "backup_url": [
                    "http://upos-sz-mirrorks3c.bilivideo.com/upgcxcode/98/24/872498/872498-1-15.flv?e=ig8euxZM2rNcNbRB7zUVhoM17WuBhwdEto8g5X10ugNcXBlqNxHxNEVE5XREto8KqJZHUa6m5J0SqE85tZvEuENvNo8g2ENvNo8i8o859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859r1qXg8gNEVE5XREto8z5JZC2X2gkX5L5F1eTX1jkXlsTXHeux_f2o859IB_&uipk=5&nbs=1&deadline=1589874109&gen=playurl&os=ks3cbv&oi=1965551630&trid=ceac015d41e04a7b90ec972db710524fu&platform=pc&upsig=74d0d62697364346f88d9c39430ce23c&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&logo=40000000"
                ]
            },
            {
                "order": 2,
                "length": 364395,
                "size": 23694756,
                "ahead": "",
                "vhead": "",
                "url": "http://upos-sz-mirrorcos.bilivideo.com/upgcxcode/98/24/872498/872498-2-15.flv?e=ig8euxZM2rNcNbRjhbUVhoM17bNBhwdEto8g5X10ugNcXBlqNxHxNEVE5XREto8KqJZHUa6m5J0SqE85tZvEuENvNo8g2ENvNo8i8o859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859r1qXg8gNEVE5XREto8z5JZC2X2gkX5L5F1eTX1jkXlsTXHeux_f2o859IB_&uipk=5&nbs=1&deadline=1589874109&gen=playurl&os=cosbv&oi=1965551630&trid=ceac015d41e04a7b90ec972db710524fu&platform=pc&upsig=308c87c55f3325bdaac2a3e8632948ee&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&logo=80000000",
                "backup_url": [
                    "http://upos-sz-mirrorks3c.bilivideo.com/upgcxcode/98/24/872498/872498-2-15.flv?e=ig8euxZM2rNcNbRjhbUVhoM17bNBhwdEto8g5X10ugNcXBlqNxHxNEVE5XREto8KqJZHUa6m5J0SqE85tZvEuENvNo8g2ENvNo8i8o859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859r1qXg8gNEVE5XREto8z5JZC2X2gkX5L5F1eTX1jkXlsTXHeux_f2o859IB_&uipk=5&nbs=1&deadline=1589874109&gen=playurl&os=ks3cbv&oi=1965551630&trid=ceac015d41e04a7b90ec972db710524fu&platform=pc&upsig=eb8f043e0f36f82ab9c62fd002143438&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&logo=40000000"
                ]
            },
            {
                "order": 3,
                "length": 352333,
                "size": 22835734,
                "ahead": "",
                "vhead": "",
                "url": "http://upos-sz-mirrorhw.bilivideo.com/upgcxcode/98/24/872498/872498-3-15.flv?e=ig8euxZM2rNcNbRjhwdVhoM17bdVhwdEto8g5X10ugNcXBlqNxHxNEVE5XREto8KqJZHUa6m5J0SqE85tZvEuENvNo8g2ENvNo8i8o859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859r1qXg8gNEVE5XREto8z5JZC2X2gkX5L5F1eTX1jkXlsTXHeux_f2o859IB_&uipk=5&nbs=1&deadline=1589874109&gen=playurl&os=hwbv&oi=1965551630&trid=ceac015d41e04a7b90ec972db710524fu&platform=pc&upsig=2685b7649f4bb6eb90f986f125432d78&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&logo=80000000",
                "backup_url": [
                    "http://upos-sz-mirrorks3c.bilivideo.com/upgcxcode/98/24/872498/872498-3-15.flv?e=ig8euxZM2rNcNbRjhwdVhoM17bdVhwdEto8g5X10ugNcXBlqNxHxNEVE5XREto8KqJZHUa6m5J0SqE85tZvEuENvNo8g2ENvNo8i8o859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859r1qXg8gNEVE5XREto8z5JZC2X2gkX5L5F1eTX1jkXlsTXHeux_f2o859IB_&uipk=5&nbs=1&deadline=1589874109&gen=playurl&os=ks3cbv&oi=1965551630&trid=ceac015d41e04a7b90ec972db710524fu&platform=pc&upsig=922543bfb26184f901187bf9c39c69b2&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&logo=40000000"
                ]
            },
            {
                "order": 4,
                "length": 356773,
                "size": 23466279,
                "ahead": "",
                "vhead": "",
                "url": "http://upos-sz-mirrorkodo.bilivideo.com/upgcxcode/98/24/872498/872498-4-15.flv?e=ig8euxZM2rNcNbRjhbUVhoM17bNBhwdEto8g5X10ugNcXBlqNxHxNEVE5XREto8KqJZHUa6m5J0SqE85tZvEuENvNo8g2ENvNo8i8o859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859r1qXg8gNEVE5XREto8z5JZC2X2gkX5L5F1eTX1jkXlsTXHeux_f2o859IB_&uipk=5&nbs=1&deadline=1589874109&gen=playurl&os=kodobv&oi=1965551630&trid=ceac015d41e04a7b90ec972db710524fu&platform=pc&upsig=9d29707faf012797ef2b6de21523fcf2&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&logo=80000000",
                "backup_url": [
                    "http://upos-sz-mirrorks3c.bilivideo.com/upgcxcode/98/24/872498/872498-4-15.flv?e=ig8euxZM2rNcNbRjhbUVhoM17bNBhwdEto8g5X10ugNcXBlqNxHxNEVE5XREto8KqJZHUa6m5J0SqE85tZvEuENvNo8g2ENvNo8i8o859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859r1qXg8gNEVE5XREto8z5JZC2X2gkX5L5F1eTX1jkXlsTXHeux_f2o859IB_&uipk=5&nbs=1&deadline=1589874109&gen=playurl&os=ks3cbv&oi=1965551630&trid=ceac015d41e04a7b90ec972db710524fu&platform=pc&upsig=9ad4524d31c8d9695ae07b400b73ed29&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&logo=40000000"
                ]
            }
        ]
    }
}
```

</details>

---

### dash方式

**示例：**

获取视频`av99999999`/`BV1y7411Q7Eq`中的1P（CID=`171776208`）的视频流url，使用dash方式获取

avID方式：

```shell
curl -G 'http://api.bilibili.com/x/player/playurl' \
--data-urlencode 'avid=99999999' \
--data-urlencode 'cid=171776208' \
--data-urlencode 'qn=0' \
--data-urlencode 'fnval=16' \
--data-urlencode 'fnver=0' \
--data-urlencode 'fourk=1' \
-b 'SESSDATA=xxx'
```

 bvID方式：

```shell
curl -G 'http://api.bilibili.com/x/player/playurl' \
--data-urlencode 'bvid=BV1y7411Q7Eq' \
--data-urlencode 'cid=171776208' \
--data-urlencode 'qn=0' \
--data-urlencode 'fnval=16' \
--data-urlencode 'fnver=0' \
--data-urlencode 'fourk=1' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "from": "local",
        "result": "suee",
        "message": "",
        "quality": 64,
        "format": "flv720",
        "timelength": 283723,
        "accept_format": "hdflv2,flv,flv720,flv480,mp4",
        "accept_description": [
            "高清 1080P+",
            "高清 1080P",
            "高清 720P",
            "清晰 480P",
            "流畅 360P"
        ],
        "accept_quality": [
            112,
            80,
            64,
            32,
            16
        ],
        "video_codecid": 7,
        "seek_param": "start",
        "seek_type": "offset",
        "dash": {
            "duration": 284,
            "minBufferTime": 1.5,
            "min_buffer_time": 1.5,
            "video": [
                {
                    "id": 80,
                    "baseUrl": "http://upos-sz-mirrorkodo.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=e0421530d95fb093d3ab8435e2698604&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=0,3&agrr=0&logo=80000000",
                    "base_url": "http://upos-sz-mirrorkodo.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=e0421530d95fb093d3ab8435e2698604&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=0,3&agrr=0&logo=80000000",
                    "backupUrl": [
                        "http://upos-sz-mirrorkodo.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=e0421530d95fb093d3ab8435e2698604&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=1,3&agrr=0&logo=40000000",
                        "http://upos-sz-mirrorkodob.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=9b0cda7e09114236c87bc1092349eef3&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=2,3&agrr=0&logo=40000000"
                    ],
                    "backup_url": [
                        "http://upos-sz-mirrorkodo.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=e0421530d95fb093d3ab8435e2698604&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=1,3&agrr=0&logo=40000000",
                        "http://upos-sz-mirrorkodob.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30080.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=9b0cda7e09114236c87bc1092349eef3&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=2,3&agrr=0&logo=40000000"
                    ],
                    "bandwidth": 2484399,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "avc1.640032",
                    "width": 1920,
                    "height": 1080,
                    "frameRate": "16000/544",
                    "frame_rate": "16000/544",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-993",
                        "indexRange": "994-1709"
                    },
                    "segment_base": {
                        "initialization": "0-993",
                        "index_range": "994-1709"
                    },
                    "codecid": 7
                },
                {
                    "id": 80,
                    "baseUrl": "http://upos-sz-mirrorhw.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30077.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=hwbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=42e5c5ba33a5589a34ed7abbdb9b2b5e&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=0,3&agrr=0&logo=80000000",
                    "base_url": "http://upos-sz-mirrorhw.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30077.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=hwbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=42e5c5ba33a5589a34ed7abbdb9b2b5e&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=0,3&agrr=0&logo=80000000",
                    "backupUrl": [
                        "http://upos-sz-mirrorhw.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30077.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=hwbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=42e5c5ba33a5589a34ed7abbdb9b2b5e&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=1,3&agrr=0&logo=40000000",
                        "http://upos-sz-mirrorhwb.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30077.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=hwbbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=f3dbd3480a91a398c454b0ad366bff75&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=2,3&agrr=0&logo=40000000"
                    ],
                    "backup_url": [
                        "http://upos-sz-mirrorhw.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30077.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=hwbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=42e5c5ba33a5589a34ed7abbdb9b2b5e&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=1,3&agrr=0&logo=40000000",
                        "http://upos-sz-mirrorhwb.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30077.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=hwbbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=f3dbd3480a91a398c454b0ad366bff75&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=2,3&agrr=0&logo=40000000"
                    ],
                    "bandwidth": 1741084,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "hev1.1.6.L120.90",
                    "width": 1920,
                    "height": 1080,
                    "frameRate": "16000/544",
                    "frame_rate": "16000/544",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-1177",
                        "indexRange": "1178-1893"
                    },
                    "segment_base": {
                        "initialization": "0-1177",
                        "index_range": "1178-1893"
                    },
                    "codecid": 12
                },
                {
                    "id": 64,
                    "baseUrl": "http://upos-sz-mirrorkodo.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30064.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=ad9b42045aa4272b14a36e6bf9c69821&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=0,3&agrr=0&logo=80000000",
                    "base_url": "http://upos-sz-mirrorkodo.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30064.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=ad9b42045aa4272b14a36e6bf9c69821&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=0,3&agrr=0&logo=80000000",
                    "backupUrl": [
                        "http://upos-sz-mirrorkodo.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30064.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=ad9b42045aa4272b14a36e6bf9c69821&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=1,3&agrr=0&logo=40000000",
                        "http://upos-sz-mirrorkodob.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30064.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=114091f7503183123a12b994bd920615&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=2,3&agrr=0&logo=40000000"
                    ],
                    "backup_url": [
                        "http://upos-sz-mirrorkodo.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30064.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=ad9b42045aa4272b14a36e6bf9c69821&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=1,3&agrr=0&logo=40000000",
                        "http://upos-sz-mirrorkodob.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30064.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=114091f7503183123a12b994bd920615&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=2,3&agrr=0&logo=40000000"
                    ],
                    "bandwidth": 1657387,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "avc1.640028",
                    "width": 1280,
                    "height": 720,
                    "frameRate": "16000/544",
                    "frame_rate": "16000/544",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-991",
                        "indexRange": "992-1707"
                    },
                    "segment_base": {
                        "initialization": "0-991",
                        "index_range": "992-1707"
                    },
                    "codecid": 7
                },
                {
                    "id": 64,
                    "baseUrl": "http://upos-sz-mirrorkodo.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30066.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=45bcf80f209783888e83477b1867df50&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=0,3&agrr=0&logo=80000000",
                    "base_url": "http://upos-sz-mirrorkodo.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30066.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=45bcf80f209783888e83477b1867df50&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=0,3&agrr=0&logo=80000000",
                    "backupUrl": [
                        "http://upos-sz-mirrorkodo.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30066.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=45bcf80f209783888e83477b1867df50&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=1,3&agrr=0&logo=40000000",
                        "http://upos-sz-mirrorkodob.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30066.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=f8ab10a8b7f73180e45dfeb4367c81e2&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=2,3&agrr=0&logo=40000000"
                    ],
                    "backup_url": [
                        "http://upos-sz-mirrorkodo.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30066.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=45bcf80f209783888e83477b1867df50&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=1,3&agrr=0&logo=40000000",
                        "http://upos-sz-mirrorkodob.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30066.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=f8ab10a8b7f73180e45dfeb4367c81e2&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=2,3&agrr=0&logo=40000000"
                    ],
                    "bandwidth": 1163699,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "hev1.1.6.L120.90",
                    "width": 1280,
                    "height": 720,
                    "frameRate": "16000/544",
                    "frame_rate": "16000/544",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-1178",
                        "indexRange": "1179-1894"
                    },
                    "segment_base": {
                        "initialization": "0-1178",
                        "index_range": "1179-1894"
                    },
                    "codecid": 12
                },
                {
                    "id": 32,
                    "baseUrl": "http://upos-sz-mirrorcos.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=cosbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=7c620c8aa36a3dcfb7da8ef9b9f65cdd&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=0,3&agrr=0&logo=80000000",
                    "base_url": "http://upos-sz-mirrorcos.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=cosbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=7c620c8aa36a3dcfb7da8ef9b9f65cdd&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=0,3&agrr=0&logo=80000000",
                    "backupUrl": [
                        "http://upos-sz-mirrorcos.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=cosbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=7c620c8aa36a3dcfb7da8ef9b9f65cdd&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=1,3&agrr=0&logo=40000000",
                        "http://upos-sz-mirrorcosb.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=cosbbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=fe91d0deb5e513c2178759f8b18d1fd3&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=2,3&agrr=0&logo=40000000"
                    ],
                    "backup_url": [
                        "http://upos-sz-mirrorcos.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=cosbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=7c620c8aa36a3dcfb7da8ef9b9f65cdd&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=1,3&agrr=0&logo=40000000",
                        "http://upos-sz-mirrorcosb.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=cosbbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=fe91d0deb5e513c2178759f8b18d1fd3&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=2,3&agrr=0&logo=40000000"
                    ],
                    "bandwidth": 746163,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "avc1.64001F",
                    "width": 852,
                    "height": 480,
                    "frameRate": "16000/544",
                    "frame_rate": "16000/544",
                    "sar": "640:639",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-995",
                        "indexRange": "996-1711"
                    },
                    "segment_base": {
                        "initialization": "0-995",
                        "index_range": "996-1711"
                    },
                    "codecid": 7
                },
                {
                    "id": 32,
                    "baseUrl": "http://upos-sz-mirrorhw.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30033.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=hwbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=8dacad471933a15a6622f46798b994da&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=0,3&agrr=0&logo=80000000",
                    "base_url": "http://upos-sz-mirrorhw.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30033.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=hwbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=8dacad471933a15a6622f46798b994da&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=0,3&agrr=0&logo=80000000",
                    "backupUrl": [
                        "http://upos-sz-mirrorhw.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30033.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=hwbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=8dacad471933a15a6622f46798b994da&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=1,3&agrr=0&logo=40000000",
                        "http://upos-sz-mirrorhwb.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30033.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=hwbbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=4945b7ab9e60365f90df320aa7fb1d84&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=2,3&agrr=0&logo=40000000"
                    ],
                    "backup_url": [
                        "http://upos-sz-mirrorhw.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30033.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=hwbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=8dacad471933a15a6622f46798b994da&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=1,3&agrr=0&logo=40000000",
                        "http://upos-sz-mirrorhwb.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30033.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=hwbbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=4945b7ab9e60365f90df320aa7fb1d84&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=2,3&agrr=0&logo=40000000"
                    ],
                    "bandwidth": 525139,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "hev1.1.6.L120.90",
                    "width": 852,
                    "height": 480,
                    "frameRate": "16000/544",
                    "frame_rate": "16000/544",
                    "sar": "640:639",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-1181",
                        "indexRange": "1182-1897"
                    },
                    "segment_base": {
                        "initialization": "0-1181",
                        "index_range": "1182-1897"
                    },
                    "codecid": 12
                },
                {
                    "id": 16,
                    "baseUrl": "http://upos-sz-mirrorhw.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30011.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=hwbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=8ea061cf6cb355006542d797e308c022&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=0,3&agrr=0&logo=80000000",
                    "base_url": "http://upos-sz-mirrorhw.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30011.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=hwbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=8ea061cf6cb355006542d797e308c022&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=0,3&agrr=0&logo=80000000",
                    "backupUrl": [
                        "http://upos-sz-mirrorhw.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30011.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=hwbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=8ea061cf6cb355006542d797e308c022&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=1,3&agrr=0&logo=40000000",
                        "http://upos-sz-mirrorhwb.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30011.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=hwbbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=8c8f0edd92f6a3c009d9d4e5b17b472f&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=2,3&agrr=0&logo=40000000"
                    ],
                    "backup_url": [
                        "http://upos-sz-mirrorhw.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30011.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=hwbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=8ea061cf6cb355006542d797e308c022&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=1,3&agrr=0&logo=40000000",
                        "http://upos-sz-mirrorhwb.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30011.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=hwbbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=8c8f0edd92f6a3c009d9d4e5b17b472f&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=2,3&agrr=0&logo=40000000"
                    ],
                    "bandwidth": 235648,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "hev1.1.6.L120.90",
                    "width": 640,
                    "height": 360,
                    "frameRate": "16000/544",
                    "frame_rate": "16000/544",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-1178",
                        "indexRange": "1179-1894"
                    },
                    "segment_base": {
                        "initialization": "0-1178",
                        "index_range": "1179-1894"
                    },
                    "codecid": 12
                },
                {
                    "id": 16,
                    "baseUrl": "http://upos-sz-mirrorcos.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=cosbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=d3f79bd8a314b5bf270b699d8a764660&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=0,3&agrr=0&logo=80000000",
                    "base_url": "http://upos-sz-mirrorcos.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=cosbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=d3f79bd8a314b5bf270b699d8a764660&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=0,3&agrr=0&logo=80000000",
                    "backupUrl": [
                        "http://upos-sz-mirrorcos.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=cosbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=d3f79bd8a314b5bf270b699d8a764660&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=1,3&agrr=0&logo=40000000",
                        "http://upos-sz-mirrorcosb.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=cosbbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=3d93563edba83b2da10eede39963c435&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=2,3&agrr=0&logo=40000000"
                    ],
                    "backup_url": [
                        "http://upos-sz-mirrorcos.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=cosbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=d3f79bd8a314b5bf270b699d8a764660&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=1,3&agrr=0&logo=40000000",
                        "http://upos-sz-mirrorcosb.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30016.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=cosbbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=3d93563edba83b2da10eede39963c435&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=2,3&agrr=0&logo=40000000"
                    ],
                    "bandwidth": 390901,
                    "mimeType": "video/mp4",
                    "mime_type": "video/mp4",
                    "codecs": "avc1.64001E",
                    "width": 640,
                    "height": 360,
                    "frameRate": "16000/528",
                    "frame_rate": "16000/528",
                    "sar": "1:1",
                    "startWithSap": 1,
                    "start_with_sap": 1,
                    "SegmentBase": {
                        "Initialization": "0-1014",
                        "indexRange": "1015-1730"
                    },
                    "segment_base": {
                        "initialization": "0-1014",
                        "index_range": "1015-1730"
                    },
                    "codecid": 7
                }
            ],
            "audio": [
                {
                    "id": 30280,
                    "baseUrl": "http://upos-sz-mirrorkodo.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=c2baedea8d725e83b43f52530b4d3afa&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=0,3&agrr=0&logo=80000000",
                    "base_url": "http://upos-sz-mirrorkodo.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=c2baedea8d725e83b43f52530b4d3afa&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=0,3&agrr=0&logo=80000000",
                    "backupUrl": [
                        "http://upos-sz-mirrorkodo.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=c2baedea8d725e83b43f52530b4d3afa&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=1,3&agrr=0&logo=40000000",
                        "http://upos-sz-mirrorkodob.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=e21dcc3c565199054de9daac0e6c8c5f&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=2,3&agrr=0&logo=40000000"
                    ],
                    "backup_url": [
                        "http://upos-sz-mirrorkodo.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=c2baedea8d725e83b43f52530b4d3afa&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=1,3&agrr=0&logo=40000000",
                        "http://upos-sz-mirrorkodob.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=e21dcc3c565199054de9daac0e6c8c5f&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=2,3&agrr=0&logo=40000000"
                    ],
                    "bandwidth": 324403,
                    "mimeType": "audio/mp4",
                    "mime_type": "audio/mp4",
                    "codecs": "mp4a.40.2",
                    "width": 0,
                    "height": 0,
                    "frameRate": "",
                    "frame_rate": "",
                    "sar": "",
                    "startWithSap": 0,
                    "start_with_sap": 0,
                    "SegmentBase": {
                        "Initialization": "0-907",
                        "indexRange": "908-1623"
                    },
                    "segment_base": {
                        "initialization": "0-907",
                        "index_range": "908-1623"
                    },
                    "codecid": 0
                },
                {
                    "id": 30216,
                    "baseUrl": "http://upos-sz-mirrorhw.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=hwbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=01cbdb1a7eaa1c7175fd14c797b4874b&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=0,3&agrr=0&logo=80000000",
                    "base_url": "http://upos-sz-mirrorhw.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=hwbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=01cbdb1a7eaa1c7175fd14c797b4874b&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=0,3&agrr=0&logo=80000000",
                    "backupUrl": [
                        "http://upos-sz-mirrorhw.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=hwbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=01cbdb1a7eaa1c7175fd14c797b4874b&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=1,3&agrr=0&logo=40000000",
                        "http://upos-sz-mirrorhwb.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=hwbbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=a71970a80181541af9e85ea6c5114ddf&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=2,3&agrr=0&logo=40000000"
                    ],
                    "backup_url": [
                        "http://upos-sz-mirrorhw.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=hwbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=01cbdb1a7eaa1c7175fd14c797b4874b&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=1,3&agrr=0&logo=40000000",
                        "http://upos-sz-mirrorhwb.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-30216.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=hwbbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=a71970a80181541af9e85ea6c5114ddf&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=2,3&agrr=0&logo=40000000"
                    ],
                    "bandwidth": 67151,
                    "mimeType": "audio/mp4",
                    "mime_type": "audio/mp4",
                    "codecs": "mp4a.40.2",
                    "width": 0,
                    "height": 0,
                    "frameRate": "",
                    "frame_rate": "",
                    "sar": "",
                    "startWithSap": 0,
                    "start_with_sap": 0,
                    "SegmentBase": {
                        "Initialization": "0-930",
                        "indexRange": "931-1646"
                    },
                    "segment_base": {
                        "initialization": "0-930",
                        "index_range": "931-1646"
                    },
                    "codecid": 0
                },
                {
                    "id": 30232,
                    "baseUrl": "http://upos-sz-mirrorkodo.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=f328717d45a24f7313361eaf3aa436f5&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=0,3&agrr=0&logo=80000000",
                    "base_url": "http://upos-sz-mirrorkodo.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=f328717d45a24f7313361eaf3aa436f5&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=0,3&agrr=0&logo=80000000",
                    "backupUrl": [
                        "http://upos-sz-mirrorkodo.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=f328717d45a24f7313361eaf3aa436f5&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=1,3&agrr=0&logo=40000000",
                        "http://upos-sz-mirrorkodob.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=b59599d3ec0684003a562d6f92818a71&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=2,3&agrr=0&logo=40000000"
                    ],
                    "backup_url": [
                        "http://upos-sz-mirrorkodo.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=f328717d45a24f7313361eaf3aa436f5&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=1,3&agrr=0&logo=40000000",
                        "http://upos-sz-mirrorkodob.bilivideo.com/upgcxcode/08/62/171776208/171776208_nb2-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1598627692&gen=playurl&os=kodobbv&oi=606633919&trid=7d8affda587741c1b390fa7b2b6536a5u&platform=pc&upsig=b59599d3ec0684003a562d6f92818a71&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&orderid=2,3&agrr=0&logo=40000000"
                    ],
                    "bandwidth": 132686,
                    "mimeType": "audio/mp4",
                    "mime_type": "audio/mp4",
                    "codecs": "mp4a.40.2",
                    "width": 0,
                    "height": 0,
                    "frameRate": "",
                    "frame_rate": "",
                    "sar": "",
                    "startWithSap": 0,
                    "start_with_sap": 0,
                    "SegmentBase": {
                        "Initialization": "0-907",
                        "indexRange": "908-1623"
                    },
                    "segment_base": {
                        "initialization": "0-907",
                        "index_range": "908-1623"
                    },
                    "codecid": 0
                }
            ]
        }
    }
}
```

</details>

## 视频的获取

将`data`.`durl`.`[1-n]`.`url`或`data`.`durl`.`[1-n]`.`backup_url`.`[0]`中的内容作为url进行GET操作, 如果有多个视频, 需要手动合并处理（注意转义符）

需要验证请求`referer`为 `.bilibili.com`域名下（防盗链），且`user-agent` 不为空

**referer或user-agent错误的情况会返回403 Forbidden**故无法获取

**以上述视频url为例：**

```shell
wget 'http://upos-sz-mirrorhw.bilivideo.com/upgcxcode/08/62/171776208/171776208-1-112.flv?e=ig8euxZM2rNcNbhMnwhVhwdlhzK3hzdVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1589565412&gen=playurl&os=hwbv&oi=606631998&trid=e0fa5f9a7610440a871279a28fae85aau&platform=pc&upsig=5f469cb4c190ed54b89bd40cc37eddff&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=293793435&logo=80000000' \
-e 'https://www.bilibili.com' \
-O 'Download_video.flv'
```

响应正文将返回一个flv文件