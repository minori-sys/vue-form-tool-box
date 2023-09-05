![vue-tool-box-logo](https://github.com/minori-sys/vue-form-tool-box/assets/31578760/a8d2a54c-9d7f-4665-851d-739b67bdb61e)

# Vue お ど う ぐ ば こ〜Form編〜

# Overview

みんな大好き`Vue`でフォームを使う場合、個人的に最強と思われる、以下の組み合わせで作成したサンプルになります。

[こちら](https://github.com/minori-sys/react-form-tool-box)で作成したReactおどうぐばこのVue版です。

てか、見た目もそのまんまです。

---

### `Vue` × `Typescript` × `VeeValidate` × `Zod`

#### フォーム全体像

![screencapture-localhost-5173-2023-08-30-22_43_17](https://github.com/minori-sys/vue-form-tool-box/assets/31578760/e5264794-19b6-4923-a131-930f73b90f86)

#### Validation時

![screencapture-localhost-5173-2023-08-30-22_43_30](https://github.com/minori-sys/vue-form-tool-box/assets/31578760/3c6c9f7a-2f8d-45ef-a698-ebd2d0f6eba7)

#### 搭載Form部品

- てきすとぼっくす
- せれくとぼっくす
- らじおぼたん
- ちぇっくぼっくす
- てきすとえりあ
- ぼたん

#### 搭載Validation

- てきすとぼっくすになんか書いてないと怒られるやつ
- めーるあどれすの形式じゃないと怒られるやつ
- めーるあどれすをもう一回入力して、違っていたら怒られるやつ
- せれくとぼっくす選んでないと怒られるやつ
- らじおぼたん選んでないと怒られるやつ
- ちぇっくぼっくすにちぇっくしてないと怒られるやつ
- てきすとえりあになんか書いてないと怒られるやつ

### ここでいきなり注意書き

……なのですが、私は元々`Vue`は*2*使いで、最近*3*を勉強したてほやほやのお久しぶりね〜の世界です。

今回、気がついたら`Vue3`になって破壊的にいろいろ変わっているんで面食らいました。

ただ、`<script setup>`の記法（？）は、普段ガシガシ使っている`React`に近い感覚で記述ができるようになり、`Vue2`の時代より、今の方が好きだなあという印象です。
学習し直しコストも低かった気がします。ありがてぇありがてぇ。

という訳で、洗練された作りには、かな〜りほど遠いかと思われますので、**あくまで「最強」はネタとして受け取って下さいまし。**

### なぜ`VeeValidate`なのか

業務では、普段、`React` × `React Hook Form`を使っています。
使用感がそのイメージに近かったからです。

例えば、`useForm`から`handleSubmit`を利用するなどですね（語彙力）。`schema`もサクッと指定できますし。
`zod`との連携もほぼ同じようなイメージで対応でき、学習コストが低く済みました。

### なぜ`Zod`なのか

こちらは、 [Reactおどうぐばこ](https://github.com/minori-sys/react-form-tool-box)の説明をご参照頂ければ……。

例によって、説明文だけでなく、`schema`も使い回し……と思ったのですが、世の中そんなに甘くありませんでした。（涙）

`VeeValidate`の公式の[Zod Schema Validation](https://vee-validate.logaretm.com/v4/integrations/zod-schema-validation/)に、以下のような記述がありまして。。

<img width="784" alt="スクリーンショット 2023-09-01 19 39 46" src="https://github.com/minori-sys/vue-form-tool-box/assets/31578760/d0320942-3689-4947-9690-0456aeab2dcc">

<br />

`React`時代と同じ`schema`のままだと、`めーるあどれすをもう一回入力して、違っていたら怒られるやつ`で使っている`superRefine`がうまく動かず。。

それを解決するため、**Vue向けに魔改修しています。**　＞ 魔改造言わない。（ごく普通にzod公式の[issue](https://github.com/colinhacks/zod/issues/479)に寄せられた解決方法で改修していますので、ご安心下さい）

という訳で、アレだ。

**煮るなり焼くなり、もう好きにして。＞マテ**

# Installation

まずはソースコードをDLして適当な場所に置いて下さい。  
Gitが入っていれば下記のコマンドでDLできるはずです。

```bash
$ git clone https://github.com/minori-sys/vue-form-tool-box.git
```

# Usage

## 何はともあれ、動かしてみたい

とりあえず、以下をコマンドライン上で実行して頂ければ、**すてきな☆すてきな☆**（あくまで自称）フォームが表示されるはずです。

```bash
$ yarn install
$ yarn dev
```

あとは、ご自由にいじいじしてお使いください。

~~あなた色に染めてん。~~

## で？仕様は？

- vue@3.3.4
- vee-validate@4.11.1
- zod@3.21.4

**環境構築は、`Vite`で行っています。**

`.nvmrc`ファイルを追加しています。

`nvm`をご利用の場合、以下のコマンドで、本システム上で`Node18.17.0`が適用されます。

**Node.jsのverですが、16以上でないと動かないかもですので、適宜、ご対応願います。**

```bash
$ nvm use
```

あー。`volta`とか`n`とかの方は、まあ、適宜よしなにがんばって☆ ＞マテ

尚、`prettier`と`stylelint`も追加していますので、以下のコマンドでコード整形もできます。あら、べんり♪

```bash
$  yarn format
```

あとはコードとか見て頑張って☆

おしまい☆彡

## いい歳なのだから、少しは説明責任を果たすように

すみません。。

だいたいの野望（ヤメれ）は意識しなくても実現できるようになっているかと思われますが、
1点だけ。

### なぜ外部ファイルとして`Pure CSS`を読み込んでいるのか

ええ。`Vue`の醍醐味（？）と言えば、vueファイル内にstyleが書き書きできることですよね。
わかります。（力説）
ですが、今回は、前述の[Reactおどうぐばこ](https://github.com/minori-sys/react-form-tool-box)で以下の宣言をした通り……。

> てか、Vueでサンプルを作る際でも、そのまま使い回せるなあと。（待て）

そのまんま使い回しました。（爆）

っと、真面目に書きますと、こちらはあくまで使い回しを前提とした叩き台なので、いらんcssは組み込まないというコンセプトで作成しています。

という訳で、あなたのシステムに合わせて、あなた色に（以下略）

## 最後にアレだ

ついカッとなって作ったシロモノ、かつ、ゆる～く動かしただけですので、いろいろとアレなところがあるかと思われます。

バグ等ございましたら、ご一報頂けますとひれ伏して喜びます。

### 免責事項
本コードのご利用により、いかなる損失や損害などの被害が発生しても責任を追いかねますのでご了承ください。m(__)m

