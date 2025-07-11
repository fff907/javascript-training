'use strict';

{
    const scores = {
        math: 80,
        english: 90,
    };
    // console.log(scores['english']);
    console.log(scores.english);
    // scores['math'] = 88;
    scores.math = 88;
    console.log(scores);

    // ここまでの結果は
    // english: 90
    // math: 88
    
    scores.physics = 70; //プロパティの追加(新しく'物理学'を追加)
    delete scores.english; //プロパティの削除('delete'を使う)
    console.log(scores);
}