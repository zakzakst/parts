## 要対応

## 参考

・eslint「'require' is not defined.」への対応
https://blog.local-c.com/archives/2526

・Pug で HTML タグを含む文字列を変数展開
https://qiita.com/tokimeki40/items/8fd4144e4c8dbb5f05de

・Pug で属性値を変数と文字列の連結にする
https://e-joint.jp/540/

・Pug : for 文、each 文でリストをループ出力する
https://hacknote.jp/archives/29090/

・PUG（was JADE）使い倒しメモ：改行せずにタグを連続表記
https://qiita.com/ichimonji_haji/items/4eff56ec19c5cfc61468

・猫でもわかるスクロールイベントパフォーマンス改善ポイント 2018
https://qiita.com/hiro0218/items/7ac41f58891d96951fa1

・snapsvg and requirejs, Cannot read property 'on' of undefined`
https://stackoverflow.com/questions/36304565/snapsvg-and-requirejs-cannot-read-property-on-of-undefined

・Chart.js Integration
https://www.chartjs.org/docs/latest/getting-started/integration.html

・Async / Await を使う時、Async ファンクションは必ず Promise が返る
https://zenn.dev/nana/articles/ff65486fcd0e34

・Hygen でコンポーネントと storybook 作成を楽しよう
https://qiita.com/yutteee/items/5f54729b4d723f72b710

## 未作成

### アクセシビリティ調査

- ページ下部の固定ボタン（スクロール途中で表示される、スクリーンリーダーを想定した時にそもそもスクロール連動を意識する必要があるか？）
- クッキー確認のようにユーザーに確認をする要素（出現したことをどう伝える？確認必須でない場合、どのようにフォーカスさせる？）
- カルーセル（次のコンテンツを確認する方法、読み飛ばさせる方法、ボタンなどでカルーセルを左右に動かした場合の読み上げ、など）
- アニメーションさせる要素（aria-hidden など使った方がいい？）
- 地図や会場案内図のアクセシビリティ
- 動画のアクセシビリティ
- 英語の場合の読み上げも調べる
- https://yhk.minibird.jp/honttoni/samples/sample62set/track.html

### ヒーロー

https://www.ys-dc.jp/ （ヒーローエリア離れる時に画像フェードアウトするの、次の内容へ視線誘導できていいと感じた）
https://tojiro.net/
https://adg.org/ （傾けた正方形と入れ替え時の拡縮）
https://www.interoffice.co.jp/ （canvas をマスクのように利用している）
https://www.e-heyaspace.com/about/

### フッター

https://www.vitamin-i.jp/henshinbike （フッター自体は position: fixed で main の margin-bottom にフッターの高さ取得して値を設定している）
https://www.carome.net/ （グラデーションの重ね方おしゃれ）
https://loof-inn.com/ （ご予約リンクのホバーインタラクション ※他でもコンバージョンリンクに応用できそう）
https://has-story.jp/ （フッターの高さ固定して、inner を position: fixed）
https://www.itoki.jp/special/act/
https://oromo.co.jp/
http://a-dot.co.jp/

### ボタン

https://marnon.jp/ （丸い VIEW MORE）
https://valleyshell.asia/
https://coten.co.jp/ （await 利用して animate メソッド完了後にドットを削除している ※js の「c-button\_\_dot-box」あたりを追ってみる）
https://richka.co.jp/
https://realation.jp/ （お問い合わせボタンのこういう目立たせ方なるほど、横幅埋めてホバーインタラクション発生するようにしているのも上手いと思う）
https://www.onecruise.co.jp/
https://lab.lifull.com/lifewill/valuesmap/
https://global.brother/ja/digest
https://morght.com/
https://www.spaceforce.com/
https://recruit.d-pops.co.jp/
https://demo.tcd-theme.com/tcd090/nativie-ads/ （サイドバー「CATEGORY」のリンクホバー時の下線「background-blend-mode: color-dodge;」）

### 見出し

https://wtfc.jp/wherever/
https://logosland.jp/ （スクロール連動のぼよよんとした感じ）
https://3bl.jp/ （コンセプトの「自分よ、その調子だ。」のところ）
https://ambr.co.jp/
https://www.hello.ai/ （音波の揺れ）
https://aqm2.ai/ja/
https://aguije.jp/ （filter: url(#textNoise) で <svg id="filters">の中の filter を参照している）
https://corp.telecy.tv/
https://www.miwa-dental.jp/
https://www.gyu36.jp/

### カード

https://www.city.meguro.tokyo.jp/ （枠線がニュッと出てくる）
https://postfake.com/
https://droptokyo.com/ （WeDrop のところホバーすると点線の枠が出てアニメーションする、画像と文字の配置面白い）
https://earcouture.jp/ （Collection の切り抜き画像と背景グレーのデザインがおしゃれ。実際のコーディングを真似するのは多分できないが、ホバー時のインタラクションも CSS で似たようなの作れないか試す）
https://cloud-dental-clinic.com/ （ぼかし画像を影に使う）
https://waffleinc.co.jp/ （ホバーで下地も変化する）
https://asobisystem.com/ （ホバー時に画像が傾く）
https://sgsjapan-career.jp/
https://www.pokemon.co.jp/ex/sv_dlc/ja/ （clip-path の使い方面白い）
https://www.spatial.io/ （サムネイルホバー時にカーソル移動で 3D 表示になる）
https://qu.ai/ （背景画像がスライスされて表示）
https://aguije.jp/ （.p-work-item**scan**contaiener を scaleX(200)にしてかぶせている、ホバー時のアンカーとライン）
https://bnn.co.jp/
https://www.recruit.torikizoku.co.jp/fresh/ （gif 画像のアニメーション枠をかぶせている）
https://www.tricle-llc.co.jp/

### ニュース一覧

### サービス一覧

https://nution.persol-career.co.jp/
https://bird-and-insect.com/ （タイポグラフィ全面に出て、ホバーすると背景全体が切り替わる）

### カルーセル

https://www.hellomobility.jp/ （モビリティラインナップ）
https://www.lebel.co.jp/products/mens/theo/theoperm/
https://or6aew4ohfoo.salonia.jp/special/genderless/ （HAIR STYLE COLLECTION のホバー時のカーソル）
https://www.felissimo.co.jp/marvel/marvel_cha.html （カルーセルのタイトル重なりおしゃれ。mask-image を利用）
https://swc-aiwakai.jp/
https://info.freedom.co.jp/
https://www.h-products.co.jp/
https://www.ga-tech.co.jp/recruit/newgraduate/ （swiper のドラッグ時にサムネイルにインタラクション入れてる）
https://www.sorenrose.com/ （swiper と clip-path のアニメーション ※f-header-swiper-items-holder）
https://e-office.inc/
https://careers.denso.com/
https://schoo.jp/
https://goodpatch.com/careers （スライド）
https://ion-e-air.jp/
https://www.karststonepaper.com/
https://www.orikane.co.jp/
https://wrl.co.jp/about/ （沿革部分）

### アコーディオン

### スクロールアニメーション

https://www.isi-education.com/ja/ （背景の文字がスクロール連動で動く）
https://newpeace.jp/
https://hotaru-personalized.com/ （HOW IT WORKS のとこ）
https://www.goldwin.co.jp/greenbaton/　（見出しの文字の表示アニメーション など）
https://green-spoon.jp/ （リード部分の商品画像の見せ方）
https://sudamasaki-music.com/collage/ （見出しがスプリットしているのがくっつく）
https://www.acsl.co.jp/ （ヒーローエリアの表示切替、gsap の delayedCall 利用している）
https://tamagaway.jp/ （画像にノイズがかかって消えていく、ノイズ画像を重ねて is-out クラスで表現している）
https://realation.jp/ （PC 表示のヘッダーの表示変化）
https://www.31ventures.jp/ （文字がカラオケの歌詞みたいに表示される）
https://shapefarm.net/ja/ （view all games の背景のところの罫線が引かれていくアニメーション、transform scale の表示のタイミングを線毎にずらしてるっぽい）
https://overa.jp/ （スクロール連動の固定が外れる時に文字が隠れるアニメーション）
https://redandgreen.jp/ （サービス説明の「開発からブランディングまで」をアニメーションで上手く表現できていると思う）
https://www.shiki.jp/special/70th/
https://tympanus.net/Development/TextRepetitionEffect/index4.html
https://www.gonshiro.co.jp/ （画像が外から収まる）
https://synflux.io/ （QR コード表示）
https://www.mcplas.co.jp/
https://www.napla.co.jp/recruit/newgrads/ （見出し、カード）
https://hotaru-personalized.com/
https://brand.studysapuri.jp/
https://swissdent.creative-nights.com/

### FAQ

### フォーム

https://www.aur.co.jp/contact/
https://saga-hirakawaya.jp/brand/contact/

### モーダル

https://enjintokyo.com/

### 問い合わせ

### メニュー

https://www.welzo.co.jp/ （事業紹介のところ）
https://savilerowprojects.com/
https://www.qlip.co.jp/
https://www.snowsand.jp/
https://www.asnova.co.jp/
https://www.uzabase.com/jp/investors/
https://majime.jp/
https://factfashion.jp/

### 開始アニメーション

https://www.hellocycling.jp/ （Cookie の「access onece ※多分制作側が once をタイポ」を削除すれば見れる）
https://corp.penmark.jp/
https://rdc.ricoh.co.jp/?utm=wewantwebs
https://s-y-n.jp/
https://enjin-dash.com/about/index.html

### その他

https://soratoumi-shop.com/
https://onecareer.co.jp/
https://www.uemura-shigyo.co.jp/
https://www.minacolor.jp/
https://www.jfe-systems.com/about/40th/
https://codateru.com/
https://www.ayana.com/ja/bali/
https://www.bram.us/2024/06/06/css-only-custom-range-slider-with-motion/
https://azukiazusa.dev/blog/scrollbar-gutter-css-property-to-prevent-screen-jitter-due-to-scroll-bar-switching/
https://designaward2023.studio.design/vote/valuescard （口がうごく顔アイコン）
https://grandcentral.jp/ （マウスストーカーの mix-blend-mode: difference;）
https://virtualmuseum.fukuoka-kenbi.jp/takara/
https://sitte.page/ （ロゴを柄にした背景）
https://mezamee.com/ （ハッシュタグのキーワード背景）
https://www.acsl.co.jp/drone-soten/ （ギャラリーのところの回転している文字）
https://setomaneki.jp/ （スクロール連動で商品を 360 度見せている）
https://buttersand.com/ （コンセプトの箇所の文字が流れるアニメーションと、スクロール連動で回転していくやつ。あと装飾画像にぼかしかけて奥行出しているのなるほど）
https://www.kai-group.com/products/kamisori/product/auger/index.html （LINE UP の swiper の使いかた試してみる。商品の詳細モーダルの一か所にパルスのアニメーション入れている）
https://tote.design/cure/
https://www.meiji.ac.jp/sst/riko-lab/gallery/ （縦に画像が並ぶよりも見てしまう気がする。スクロールの長さ的には横のほうが長いはずなのに。時々文章を入れているのも単調な印象を和らげている気がする）
https://www.kabu-kitamura.com/ （ヒーローエリアの表現面白い）
https://terada-knit.co.jp/ （スクロール連動のアニメーションの SKIP の方法をアンカーリンクでやっているのがなるほどと感じた）
https://www.trunk-base.com/ （PC でホバーした時に画像が後ろに出る）
https://rara.ritsumei.ac.jp/ （ヒーローエリアのアニメーション）
https://co-lab.joshibi.net/ （スクロール連動で図形が書かれていく）
https://www.ics.ac.jp/webopencampus/ （背景の図形アニメーション応用できそう）
https://tokiwa-factory.com/ （幾何学模様のアニメーション、目立たせ過ぎない装飾のアクセントになっている）
https://www.prismpartner.co.jp/ （value のところの表示アニメーション）
https://richka.co.jp/ （フッターの表示の仕方 ※body を「overflow: hidden;」にしてページコンテンツのスクロール処理でやっている）
https://sbro.co.jp/ （ヒーローエリア固定の方法参考にする html に「overflow-x: hidden;」body に「width: calc(100% + 15px); ※多分 js でスクロールバーの幅取得している」）
https://toridori.co.jp/ （ラインアニメーションの表現）
https://www.pkshatech.com/ （ヒーローエリアの下の画像がスクロール始めると伸びる ※スクロールを促す表示との視線誘導がいいと感じた）
https://www.spade-co.jp/ （our work のサムネイルの螺旋、all works のリンクのインタラクション）
https://exitfilm.jp/ （service の背景画像の角版の影おしゃれ）
https://tyo.co.jp/ （canvas で文字の切り抜きがスクロール連動）
https://www.aig-japan.jp/ （ヒーローエリアの積み木的なインタラクション）
https://punchred.xyz/projects/
https://www.depot-yamanashi.jp/ （clip-path の svg アニメーション）
https://www.ai-model.jp/ （スクロールで画像が切り替わる）
https://www.porters.jp/recruit/ （セクション区切りのシャッとしたライン）
https://www.hamatatsu-lab.com （吹き出し揺れる）
https://www.hamadasyuzou.co.jp/kakushigura_brand/ （見出しとリード文辺りの扱い）
https://www.haagen-dazs.co.jp/brand/special/why-haagen-dazs/ （ホバー時の数字アニメーション）
https://culturenext.byspotify.com/ja-JP
https://innovation.tbs.co.jp/akasaka_report/ （トップに戻るボタン）
https://innovation.tbs.co.jp/ （アンカーの付け方も参考にする）
https://sirup.online/5th/ （CD ケースが積み上がっているの）
https://materials.8card.net/product/888/
https://www.asiankung-fu.com/s/n80/page/25th （セクションの背景見出しの切り替わり）
https://www.obunsha.co.jp/pr/change/process/ （スクロール連動で工程のフォーカス）
https://www.pola.co.jp/special/o/wecaremore/ （lottie の表現参考になる、transition scale, translate 両方利用して弾力感？出してるのも面白い）
https://anri.vc （canvas と文字の重なり）
https://morght.com/ （png アニメーションの装飾）
https://matsumoto-seikeigeka.com/ （診療のご案内の図）
Youtube の PC 表示で検索 BOX のアイコンホバー時にツールチップが表示されるのよかった
https://githubnext.com/projects/code-brushes （切替のインタラクションで星の装飾が表示される）
https://styleport.co.jp/ （Careers 部分の画面固定のしかた（画像上下に動く・オフセットついたボックス））
https://photoshopvip.net/144594 （トップへ戻るボタン、focus のスタイル）
https://www.daytona-park.com/news/16thcp/ （チケット切れるアニメーション）
https://note.com/goando/n/n9346aea1b0ea （view transitions 使ってアプリライクな動き Nuxt で試す。Apple Books みたいにカルーセルから詳細に移動 SPA と SSR 使い分けられるやつ使って）
https://trendbook.marketing/deepfake （ビデオ部分ホバー時のマウスストーカー）
https://css-tricks.com/clipping-masking-css/
https://recruit.dac.co.jp/people/jin-ichinomiya （画像のモザイクアニメーション）

```
https://recruit.dac.co.jp/assets/js/body.js
waveEffect 関数
```

https://thesingularity.squarespace.com/ （右下のボタン）
https://service.kateinoigaku.jp/index.html （ローディングのマウスストーカー）
https://autoro.io/ （マウスストーカーの mix blend）
https://dhnn.com/ （言語切替）
https://www.featuredprojects.jp/ （カーソルカスタマイズ）
https://www.kirameki.cc/ （ホバーインタラクション）
https://gokagn.com/ （LET'S TALK のホバーインタラクション）
https://www.tokuyama-dental.co.jp/recruit/ （リンクのティッカー）
https://www.pacificleague.jp/ （立体画像）
http://www.sankei-denki.jp/
https://deltaclinic.jp/
https://zenn.dev/ixkaito/articles/css-image-glitch
https://codepen.io/z-/pen/XNQaym
https://www.nintendo.co.jp/switch/av5ja/index.html
https://school.dhw.co.jp/p/cgvfx-lp/1708dhw/ （履修科目）
https://www.otemon-jh.ed.jp/o-drive/ （バズキーワード）
https://shunbin.jp/ （グラフ）
https://www2.mejiro.ac.jp/univ/mejinavi2021/ （両サイドのスライド）
https://book.mynavi.jp/webpro-free/ （背景のアニメーション）
https://season.a2care-anatc.com/kahun/ （スクロールを促すバー）
https://sencraneservice.com/ （ななめのスライド画像）
https://www.atamisekaie.jp/
http://www.ney.co.jp/ （ページ遷移）

### セクション

https://plus-d.co.jp/plus-xs/ （特長・強み）
https://cells-academy.com/ （特長・強み）
https://www.kose.co.jp/esprique/ （事例）
https://koncent.net/masknoie/ （○○ について）
https://www.otemae.ac.jp/opencampus/university/ （サービス ※どんな学部がある？）
https://www.mizuno.jp/baseball/products/lightrevo.aspx （○○ について ※「軽量維新」と「グリーンライト」の部分）
https://b43.jp/ （特長・強み ※セクション間の線が伸びる）
https://www2.mejiro.ac.jp/univ/mejinavi2021/ （使い方 ※入学手続き）

### 汎用パーツ
