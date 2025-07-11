'use strict';

{
    const scores = {
        math: 80,
        english: 90,
    };
    console.log(scores.english); //プロパティへのアクセス
    scores.math = 88; //プロパティへの代入(ドットで繋げる)

    scores.physics = 70; //プロパティの追加(新しく'物理学'を追加)
    delete scores.english; //プロパティの削除('delete'を使う)
    console.log(scores);

    // 結果：90(scores.english)
    // math: 88
    // physics: 70
}