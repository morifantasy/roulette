# 罰ゲームルーレット

## 使用言語
後で決定(JavaScript?)

## 機能
### メイン処理
* 項目の追加
* 項目の削除
* ルーレットを回す

#### 項目の追加
* 追加する項目を入力する
    * 日本語入力を受け付ける
    * 最大128文字まで入力可能
* 入力内容を罰ゲーム一覧のテキストファイルに追加する
    * 各項目は改行にて一行ごとに記載される

#### 項目の削除
* 罰ゲーム一覧のテキストファイルを読み込む
    * ファイル内の文章を一行ごとに読み出し、リストに格納する
* 一覧から削除する項目を選択する
    * リスト内の要素を表示し、一つの項目を選択できるようにする
* テキストファイルの一覧から選択項目を削除する
    * 選択された要素をリスト内から削除し、更新する
    * 更新されたリストでテキストファイルの内容を上書きする

#### ルーレットを回す
* 罰ゲーム一覧のテキストファイルを読み込む
    * ファイル内の文章を一行ごとに読み出し、リストに格納する
* リストの中から一つをランダムで表示する
    * リストの長さを求め、1から長さ分までの中から無作為に数値を取得する
    * 取得した数の要素番号に格納されているデータを画面に表示する
* 選択された罰ゲームを実施済み罰ゲーム一覧に格納する
    * 選ばれた内容を実施済み罰ゲームのリストに書き込む
    * 罰ゲームリストから今回選ばれた罰ゲームを削除し、罰ゲーム一覧のテキストファイルを更新する

## 機能追加検討項目
* 筋トレルーレットの追加
* 罰ゲームポイントの管理機能追加
* ルーレットが回転するようなUI
* ポイントのたまった人のルーレットボタンのみ押下可能にする