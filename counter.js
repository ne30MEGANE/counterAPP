((_pid, _app) => {
    _app.data("number", 0);
    _app.event("count", () => { //カウントアップ処理
        let old_num = parseInt(_app.data("number"));
        let new_num = old_num + 1;
        _app.data("number", new_num);
    });

    _app.event("reset", () => { //リセット・初期状態
        _app.data("number", 0);
    });

})(pid, app);