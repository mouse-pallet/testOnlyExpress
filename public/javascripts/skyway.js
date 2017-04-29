multiparty = new MultiParty( {
    "key": "a6c8450d-0132-4f6b-87fd-335791028f73"  /* SkyWay keyを指定 */
  });

  multiparty.on('my_ms', function(video) {
    // 自分のvideoを表示
    var vNode = MultiParty.util.createVideoNode(video);
    $(vNode).appendTo("#streams");
  }).on('peer_ms', function(video) {
    // peerのvideoを表示
    var vNode = MultiParty.util.createVideoNode(video);
    $(vNode).appendTo("#streams");
  }).on('ms_close', function(peer_id) {
    // peerが切れたら、対象のvideoノードを削除する
    $("#"+peer_id).remove();
  });

  // サーバとpeerに接続
  multiparty.start()
