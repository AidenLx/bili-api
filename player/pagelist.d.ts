import { returnBody } from "./general";

// video/info.md#%E6%9F%A5%E8%AF%A2%E8%A7%86%E9%A2%91%E5%88%86p%E5%88%97%E8%A1%A8--aidbvid%E8%BD%ACcid

export const URL = "http://api.bilibili.com/x/player/pagelist";

export type Params = PageListParams_A | PageListParams_B;

export type Data = returnBody<pageInfo[]>

interface pageInfo {
  /** 当前分P CID */
  cid: number;
  /** 当前分P */
  page: number;
  /** 视频来源*/
  from: videoSource;
  /** 当前分P标题 */
  part: string;
  /** 当前分P持续时间	单位为秒 */
  duration: number;
  /** 站外视频vid */
  vid: string;
  /** 站外视频跳转url */
  weblink: string;
  /** 当前分P分辨率	有部分视频无法获取分辨率 */
  dimension?: Dimension;
}

interface Dimension {
  /** 当前分P 宽度 */
  width: number;
  /** 当前分P 高度 */
  height: number;
  /** 是否将宽高对换 0：正常 1：对换 */
  rotate: 0 | 1;
}

export const enum videoSource {
  /** 普通上传（B站） */
  vupload = "vupload",
  /** 芒果TV */
  hunan = "hunan",
  /** 腾讯 */
  qq = "qq",
}

interface PageListParams_A {
  /** 稿件avID，为av后的数字 eg. aid=13502509 */
  aid: number;
}

interface PageListParams_B {
  /** 稿件bvID，为完整字符串(包括"bv") eg. bvid=BV1ex411J7GE */
  bvid: string;
}