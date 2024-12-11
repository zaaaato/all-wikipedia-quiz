# ランダム Wikipedia クイズジェネレーター

## FOR クソアプリアドベントカレンダー 2024

つまりクソアプリ

### 仕組み

1. ランダムな wikipedia の記事にリダイレクトしてくれる url（[これ](https://ja.wikipedia.org/wiki/Special:Randompage)）にアクセス
2. ページの内容から LLM でクイズを生成

### LLM

2024 年 12 月現在無料で使わせてもらえたので groq を利用。
※すぐ API 利用制限に引っかかる

### インフラ

例によって Vercel の hobby プラン  
ありがたや
