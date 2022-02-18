Search.setIndex({docnames:["callbacks","examples/classification_and_regression","examples/image_reconstruction","examples/introduction","examples/policy_interface","examples/semantic_segmentation","examples/sequence_tagging","examples/tips_and_tricks","examples/transfer_learning","experiment","index","layers","metrics","model","utils"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["callbacks.rst","examples/classification_and_regression.rst","examples/image_reconstruction.rst","examples/introduction.rst","examples/policy_interface.rst","examples/semantic_segmentation.rst","examples/sequence_tagging.rst","examples/tips_and_tricks.rst","examples/transfer_learning.rst","experiment.rst","index.rst","layers.rst","metrics.rst","model.rst","utils.rst"],objects:{"poutyne.Callback":[[0,1,1,"","model"],[0,2,1,"","on_backward_end"],[0,2,1,"","on_epoch_begin"],[0,2,1,"","on_epoch_end"],[0,2,1,"","on_predict_batch_begin"],[0,2,1,"","on_predict_batch_end"],[0,2,1,"","on_predict_begin"],[0,2,1,"","on_predict_end"],[0,2,1,"","on_test_batch_begin"],[0,2,1,"","on_test_batch_end"],[0,2,1,"","on_test_begin"],[0,2,1,"","on_test_end"],[0,2,1,"","on_train_batch_begin"],[0,2,1,"","on_train_batch_end"],[0,2,1,"","on_train_begin"],[0,2,1,"","on_train_end"],[0,2,1,"","on_valid_batch_begin"],[0,2,1,"","on_valid_batch_end"],[0,2,1,"","on_valid_begin"],[0,2,1,"","on_valid_end"],[0,1,1,"","params"]],"poutyne.EpochMetric":[[12,2,1,"","forward"],[12,2,1,"","get_metric"],[12,2,1,"","reset"]],"poutyne.FBeta":[[12,2,1,"","forward"],[12,2,1,"","get_metric"],[12,2,1,"","reset"]],"poutyne.MLFlowLogger":[[0,2,1,"","log_config_params"],[0,2,1,"","log_metric"],[0,2,1,"","log_param"]],"poutyne.Model":[[13,1,1,"","batch_metrics"],[13,2,1,"","cpu"],[13,2,1,"","cuda"],[13,1,1,"","epoch_metrics"],[13,2,1,"","evaluate"],[13,2,1,"","evaluate_dataset"],[13,2,1,"","evaluate_generator"],[13,2,1,"","evaluate_on_batch"],[13,2,1,"","fit"],[13,2,1,"","fit_dataset"],[13,2,1,"","fit_generator"],[13,2,1,"","get_batch_size"],[13,2,1,"","get_weight_copies"],[13,2,1,"","get_weights"],[13,2,1,"","load_optimizer_state"],[13,2,1,"","load_weights"],[13,1,1,"","loss_function"],[13,1,1,"","network"],[13,1,1,"","optimizer"],[13,2,1,"","predict"],[13,2,1,"","predict_dataset"],[13,2,1,"","predict_generator"],[13,2,1,"","predict_on_batch"],[13,2,1,"","save_optimizer_state"],[13,2,1,"","save_weights"],[13,2,1,"","set_weights"],[13,2,1,"","to"],[13,2,1,"","train_on_batch"]],"poutyne.ModelBundle":[[9,2,1,"","from_model"],[9,2,1,"","from_network"],[9,2,1,"","get_best_epoch_stats"],[9,2,1,"","get_path"],[9,2,1,"","get_saved_epochs"],[9,2,1,"","infer"],[9,2,1,"","infer_data"],[9,2,1,"","infer_dataset"],[9,2,1,"","is_better_than"],[9,2,1,"","load_checkpoint"],[9,2,1,"","test"],[9,2,1,"","test_data"],[9,2,1,"","test_dataset"],[9,2,1,"","train"],[9,2,1,"","train_data"],[9,2,1,"","train_dataset"]],"poutyne.Notificator":[[0,2,1,"","send_notification"]],"poutyne.PeriodicSaveCallback":[[0,2,1,"","restore"],[0,2,1,"","save_file"]],"poutyne.SKLearnMetrics":[[12,2,1,"","forward"],[12,2,1,"","get_metric"],[12,2,1,"","reset"]],poutyne:[[12,0,1,"","Accuracy"],[0,0,1,"","AtomicCSVLogger"],[0,0,1,"","BestModelRestore"],[12,0,1,"","BinaryAccuracy"],[12,0,1,"","BinaryF1"],[12,0,1,"","BinaryPrecision"],[12,0,1,"","BinaryRecall"],[0,0,1,"","CSVLogger"],[0,0,1,"","Callback"],[0,0,1,"","ClipNorm"],[0,0,1,"","ClipValue"],[0,0,1,"","ConstantLR"],[0,0,1,"","CosineAnnealingLR"],[0,0,1,"","CosineAnnealingWarmRestarts"],[0,0,1,"","CyclicLR"],[0,0,1,"","DelayCallback"],[0,0,1,"","EarlyStopping"],[12,0,1,"","EpochMetric"],[9,3,1,"","Experiment"],[0,0,1,"","ExponentialLR"],[12,0,1,"","F1"],[12,0,1,"","FBeta"],[0,0,1,"","LRSchedulerCheckpoint"],[11,0,1,"","Lambda"],[0,0,1,"","LambdaCallback"],[0,0,1,"","LambdaLR"],[0,0,1,"","LinearLR"],[0,0,1,"","MLFlowLogger"],[13,0,1,"","Model"],[9,0,1,"","ModelBundle"],[0,0,1,"","ModelCheckpoint"],[0,0,1,"","MultiStepLR"],[0,0,1,"","MultiplicativeLR"],[0,0,1,"","NotificationCallback"],[0,0,1,"","Notificator"],[0,0,1,"","OneCycleLR"],[0,0,1,"","OptimizerCheckpoint"],[0,0,1,"","OptimizerPolicy"],[0,0,1,"","PeriodicSaveCallback"],[0,0,1,"","PeriodicSaveLambda"],[0,0,1,"","Phase"],[12,0,1,"","Precision"],[0,0,1,"","ProgressionCallback"],[12,0,1,"","Recall"],[0,0,1,"","ReduceLROnPlateau"],[12,0,1,"","SKLearnMetrics"],[0,0,1,"","StepLR"],[0,0,1,"","TensorBoardGradientTracker"],[0,0,1,"","TensorBoardLogger"],[0,0,1,"","TerminateOnNaN"],[12,0,1,"","TopKAccuracy"],[12,3,1,"","acc"],[12,3,1,"","bin_acc"],[0,3,1,"","cosinespace"],[0,3,1,"","linspace"],[14,3,1,"","numpy_to_torch"],[0,3,1,"","one_cycle_phases"],[14,3,1,"","plot_history"],[14,3,1,"","plot_metric"],[14,3,1,"","set_seeds"],[0,3,1,"","sgdr_phases"],[12,3,1,"","topk"],[14,3,1,"","torch_apply"],[14,3,1,"","torch_to_numpy"]]},objnames:{"0":["py","class","Python class"],"1":["py","attribute","Python attribute"],"2":["py","method","Python method"],"3":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:attribute","2":"py:method","3":"py:function"},terms:{"0":[0,1,2,3,4,5,6,7,8,9,10,12,13],"000":[2,6,9],"00000":9,"000000":[9,13],"0005":5,"0008":7,"001":[1,2,8],"00310":0,"008":4,"01":[0,1,4,9,13],"01363091799794347":13,"015421080999658443":13,"019999928001197986":13,"02":13,"0298177790245972":9,"02d":0,"03":13,"04057":9,"05":13,"05063822727650404":3,"052":0,"054253826141357":9,"054254":9,"0637106419890187":9,"06664":9,"06714504160980383":3,"0721172170015052":9,"08248":0,"08836929737279813":3,"09":9,"09501855444908142":3,"09626663728555043":3,"09892":9,"0s":6,"1":[0,1,2,3,4,5,6,7,8,9,11,12,13,14],"10":[2,3,4,5,6,7,8,9,12],"100":[3,4,6,10,12],"1000":[1,13],"10017542181412378":3,"1024":4,"10380942322810491":3,"10th":[3,7],"12":4,"123":1,"125000":13,"128":[3,7],"1290":3,"12999725341797":3,"13":2,"13690324830015502":3,"14":[5,9],"14024296019474666":3,"158523":13,"15th":1,"16":[1,3,7,9],"160":3,"16x14x14":3,"16x28x28":3,"17":9,"171":0,"17258917854229608":3,"178":1,"18":[4,8,10],"18333435058594":3,"19":[9,13],"1x28x28":3,"2":[0,1,2,3,4,5,6,7,9,10,12,13,14],"20":[1,2,3,6,7,8,9,10,12,13],"200":[3,4,8,9,10,13],"2000":1,"2007":5,"2020":10,"206":3,"21":9,"218":1,"21th":1,"22":[9,13],"22387765":8,"224":[1,2,4,5,8],"225":[1,4,5,8],"22846779":8,"229":[1,4,5,8],"23":9,"236106":9,"23610631942749":9,"24":9,"242":3,"25":[3,7,9,13],"255":1,"256":3,"26495799":8,"26666259765625":3,"279577":13,"28":3,"287117":9,"28x28":2,"29582977294922":3,"2f":0,"2x2":3,"3":[0,1,3,4,5,6,7,9,10,12,13,14],"30":[6,8,12],"300":[4,6],"32":[0,2,3,5,6,7,8,9,10,13],"32x14x14":3,"32x7x7":3,"34":[5,14],"351375":9,"351375141143799":9,"354721":9,"36814":0,"375":[9,13],"375000":[9,13],"3x3":3,"4":[1,2,3,6,9,13,14],"40":8,"400":4,"40161":0,"406":[1,4,5,8],"42":[0,2,3,5,6,7,8,9,12],"42382449":8,"42708587646484":3,"43":[0,12],"454859":13,"456":[1,4,5,8],"47421962":8,"48":1,"485":[1,4,5,8],"4914721":8,"5":[0,1,2,3,4,6,7,8,9,10,12,13,14],"50":8,"500":4,"50000":[1,9],"500000":[9,13],"5026924496193726":3,"512":4,"52":0,"545359":9,"575071":13,"5th":[3,7],"6":[0,1,6,8,9,10,13,14],"60":[2,8],"621514":9,"625":[9,13],"625000":[9,13],"64":3,"640":3,"650":3,"6550078630447387":13,"655008":13,"655412":9,"65541223526001":9,"660806":13,"660806336402893":13,"66666412353516":3,"6674459838867188":13,"667446":13,"68333435058594":3,"6923445892333984":13,"692345":13,"7":[3,4,6,7,9,14],"70":5,"705489":13,"7054892110824584":13,"719885":13,"7198852968215943":13,"73332977294922":3,"75":[0,3,13],"750000":13,"752676":13,"759376544952392":9,"759377":9,"762":3,"8":[3,4,6,7,8,9,14],"80":[3,6,7],"800":[4,9,10,13],"813141":9,"832":3,"84":3,"85":0,"875":9,"875000":9,"89":0,"89051":0,"89520":0,"896":3,"897135":9,"9":[4,9,13,14],"91874694824219":3,"922":3,"94":3,"944495":9,"94449516296386":9,"95":[0,3],"95204":0,"95833587646484":3,"96":3,"960":3,"97":3,"98":3,"985811":13,"99":4,"abstract":[0,12],"b\u00e9langer":10,"case":[0,1,6,7,9,12,13],"class":[1,2,3,5,6,7,8,10,11,12,13],"data sci":10,"deep learn":10,"default":[0,3,7,9,12,13,14],"do":[0,1,3,5,6,7,8,9,12,13],"final":[0,1,2,3,5,6,7,8,9],"float":[0,3,7,12,13,14],"fr\u00e9d\u00e9rik":10,"fran\u00e7oi":10,"function":[0,2,3,5,6,8,10,11,13,14],"import":[0,1,2,3,4,5,6,7,8,9,10,12,13,14],"int":[0,1,3,7,8,9,12,13,14],"long":[6,9,10,13],"machine learn":10,"neural network":10,"new":[0,1,2,3,5,7,8,9,10,12,14],"public":[1,8],"return":[0,1,2,3,4,6,7,9,12,13,14],"short":[3,6],"super":[0,1,2,6,7,12],"true":[0,1,2,3,4,5,6,7,8,9,12,13,14],"try":[1,2,5],"universit\u00e9":10,"while":[0,3,4,7,9],A:[0,3,6,9,10,12,13,14],As:[1,2,5,7],At:3,BY:10,But:[4,6,8],By:[0,9,12,13,14],For:[0,1,3,4,6,7,9,12],If:[0,1,2,6,7,9,12,13,14],In:[0,1,2,3,5,6,7,9,10,12,13],Is:0,It:[0,1,3,4,5,7,9,10,12,13],NOT:[9,13],No:12,Not:14,On:9,One:[0,2,3,5,6,7,10,12,13],Or:[6,10],Such:2,That:[3,6,7],The:[0,1,2,3,5,7,8,9,10,11,12,13,14],Then:[3,7],There:[5,12],These:[1,3,9,14],To:[0,5,6,7,9,12,13],Will:9,With:[5,10,13],_:[6,7,12],__call__:6,__getitem__:[2,6],__init__:[1,2,6,7,12],__iter__:13,__len__:[2,6,13],__name__:12,__next__:13,_acc:12,_accuraci:12,_convert_tags_to_idx:6,_is_direct:9,_loss:12,_pytorchlrschedulerwrapp:0,a_link:0,a_path:9,a_pytorch_network:9,ab:2,abil:[2,12],abl:[2,3,5,6,7,8],about:6,abov:[0,2,3,5,7,8,9],absolut:0,acc:[0,3,4,7,8,9,12,13],acc_sum:3,accept:1,accord:[0,3,7,9],account:[6,12],accumul:12,accur:2,accuraci:[0,2,3,5,6,7,8,9,10,12,13],achiev:1,action:[3,7],activ:10,actual:[3,7],ad:[2,9],adam:[2,5,9,13],adaptiveavgpool2d:4,add:[0,1,6,7],addit:[0,3,12],address:[0,5,6],address_vector:6,adjust:0,advantag:[1,5],advis:[9,12,13],ae:2,after:[0,9],again:[5,6,10],aim:[3,7],alain:10,alert_frequ:0,alexi:10,algorithm:[1,13],alia:[9,12],all:[0,1,2,3,4,5,6,7,8,9,10,12,13,14],allennlp:12,allow:[0,2,3,5,7,8,9,10,13],almost:[3,6,8],along:5,alreadi:[3,6,7,9,13,14],also:[0,1,2,3,4,5,6,7,8,9,10,12,13],altern:[0,11,12,13],alwai:6,an:[0,1,2,3,5,7,9,10,12,13,14],analysi:5,analyz:1,ani:[1,9,12,13,14],anlrschedulercallback:0,anoth:[1,3,7,9,12,13],another_model_bundl:9,antoin:10,anywai:0,apach:12,api:4,append:[0,6],appli:[0,1,5,9,11,12,14],applic:[2,13],approach:5,appropri:9,approxim:3,ar:[0,1,2,3,4,5,6,7,8,9,10,12,13,14],arang:[1,2,8],architectur:[5,6],archiv:8,arg:[0,3,6,7,13],argmax:[1,3,6],argument:[0,1,2,5,6,7,9,12,13,14],arlington:10,around:0,arrai:[9,12,13,14],artifici:7,asarrai:8,asset:6,assign:[1,9],associ:[6,9,10,12,13],assum:[9,13],astyp:[10,13],atom:0,atomic_writ:0,atomiccsvlogg:[0,9],attr:1,attribut:[1,9,12],auc:7,auroc:[10,12],author:10,autoencod:5,automat:[1,9,10,13],avail:[0,5,7,9,10,12,13],averag:[0,3,7,12,13],average_precision_scor:12,avg_acc:3,avg_loss:3,avgpool:4,avoid:[2,3],ax1:[2,5],ax2:[2,5],ax3:[2,5],ax:[2,4,14],axi:[1,5,6,7],b:12,back:[6,7],backpropag:[0,3,13],backward:3,balanc:8,bar:[0,7,13],bare:10,base:0,base_cycle_length:[0,4],base_path:8,base_url:1,basic:10,batch:[0,3,4,6,7,8,9,13],batch_delai:0,batch_first:6,batch_granular:0,batch_metr:[0,3,4,6,7,8,9,10,12,13],batch_numb:0,batch_siz:[1,2,3,4,5,6,7,8,9,10,12,13],batches_per_step:13,bcewithlogitsloss:12,beauchemin:10,becaus:[6,7],been:[0,1,2,12,13,14],befor:[0,1,2,3,4,6,7,8,10,13],begin:[0,9],behavior:12,being:[3,12],believ:5,below:[1,2,5,7,9,12],best:[0,1,2,3,5,6,7,8,9,10,12],best_epoch:8,best_epoch_:[3,7,8],best_epoch_idx:8,best_weight:[2,5],bestmodelrestor:0,beta:12,better:[0,2,3,5,7,8,9],between:[0,1,3,5,7,12],bia:0,bidirect:6,big:[5,7],biggest:0,bin:6,bin_acc:12,bin_f1:12,bin_fscor:12,bin_precis:12,bin_recal:12,binari:12,binary_acc:12,binary_accuraci:12,binary_f1:12,binary_precis:12,binary_recal:12,binaryaccuraci:12,binaryf1:12,binaryprecis:12,binaryrecal:12,block:[3,4,5],boilerpl:10,bold:0,bool:[0,9,13,14],both:[0,1,9,13],brown:10,bu:12,bug:10,bundl:[0,9],c:12,ca:[1,8],calcul:[0,2,3,9,12],call:[0,3,6,9,12,13],callabl:[0,9,11,12,13],callback:[1,2,4,5,8,9,10,12,13,14],can:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],cannot:[6,13],capac:2,care:[9,13],categor:6,caus:13,cc:[6,10],ce_loss:1,celoss:7,celoss_with_temp:7,certain:[0,3],cfg_dict:0,chain:[0,4],challeng:5,chang:[0,1,2,6,7,12,13],channel:0,check:2,checkpoint:[3,7,8,9,10],checkpoint_epoch_1:9,checkpoint_epoch_2:9,checkpoint_epoch_3:9,checkpoint_epoch_9:9,chees:10,choos:0,cifar10:4,civic:6,ckpt:[2,3,5,7,8,9],clarifi:5,classif:[2,3,5,7,8,9,10],classifi:[1,12],classification_and_regress:10,classificationregressionloss:1,classifierloc:1,classmethod:9,clean:12,clip:[0,1,5],clip_grad_norm_:0,clip_grad_value_:0,clip_valu:0,clipnorm:0,clipvalu:0,close:14,cnn:1,code:[0,1,2,3,5,6,7,9,10,12,13],colab:[1,2,3,4,5,6,7,8,10],collate_fn:[6,13],color:[0,5,13],color_bgr2rgb:1,colorama:[0,7],colorjitt:4,colour:7,column:9,com:10,combin:[0,12],come:10,common:10,compact:2,compar:[2,9],comparison:[1,10],compat:10,complet:10,complex:[1,2],compon:6,compos:[1,2,4,5,8,10,14],compress:2,compuat:[9,13],comput:[0,1,2,3,5,6,7,9,13],concaten:[6,9,13],concatenate_return:[6,9,13],conduct:6,config:0,config_param:0,configur:0,confus:12,connect:1,consequ:2,consid:[1,9],consider:1,consist:[1,6],constant:[0,8],constantlr:0,constructor:0,consum:5,contain:[0,1,2,4,5,7,9,12,13,14],content:6,contextlib:6,continu:[2,3,5,7],contract:5,contrari:13,contribut:12,control:[0,4],conv1:2,conv2:2,conv2d:[2,3,7],conv:[2,3],conv_net:3,conv_net_model_bundl:3,convautoencod:2,converg:[0,5],convert:[6,9,13,14],convert_to_numpi:13,convnet_mnist:7,convnet_mnist_model_bundl:7,convolut:[5,7],convtranspose2d:2,coord:1,coordin:1,copi:[0,12,13,14],core:[3,7,10],correspond:[0,1,3,6,9,12,13],cosin:[0,4],cosineannealinglr:0,cosineannealingwarmrestart:0,cosinespac:[0,4],could:[0,7,9,12,13],count:[0,12],cpu:[1,2,3,4,5,6,7,8,10,13,14],crack:6,creat:[0,1,2,3,4,5,6,7,8,10,13,14],create_convolutional_network:3,create_fully_connected_network:3,create_network:7,creation:[8,13],criterion:[2,4,5],cross:[1,6,7,9],cross_entropi:[7,8,10,12,13],cross_entropy_loss:0,crossentropi:9,crossentropyloss:[1,3,4,6,7,8,12],crossentropylosswithtemperatur:7,csv:[0,14],csvlogger:[0,1,2,3,5,7,8,14],cub200:8,cub200_resnet18_experi:8,cub:10,cuda:[1,2,3,4,5,6,7,8,10,13],cuda_devic:[3,4,6,7,8,10],cumbersom:[3,7],curd:10,current:[0,2,3,5,7,8,9,13,14],custom:[9,12],custom_loss_funct:7,custom_nam:12,customepochmetr:12,customepochmetric2:12,customepochmetric3:12,customiz:9,cv2:1,cvtcolor:1,cycl:[0,4],cycle_mult:[0,4],cycliclr:0,d:[3,4,6,7,8,10,12],d_1:12,d_2:12,d_k:12,data:[2,3,5,7,8,9,10,12,13],data_parallel:13,data_root:1,data_typ:6,datafram:[9,14],dataload:[1,2,3,4,5,8,9,13],dataloader_kwarg:13,dataset:[4,8,9,10,13],dataset_fold:1,david:10,deal:5,decai:7,decid:1,decis:0,decod:[2,5],decompos:12,decreas:[0,7],deep:[5,10],def:[1,2,3,4,6,7,8,12],defin:[0,1,2,3,5,6,7,8,10,12],definit:5,delai:0,delaycallback:0,demonstr:4,depend:[0,9,12,13],descent:[0,3],describ:[0,3,9,13],descript:0,descriptor:[0,13],design:[2,5],destin:0,detach:1,detail:[0,3,8,9,10,12,13],detect:[6,10],determin:[5,12],determinist:[9,14],detriment:7,dev:10,develop:10,devic:[0,1,2,3,4,5,6,7,8,9,10,13],dict:[0,7,9,12,13,14],dictionari:[0,6,7,12,13,14],did:2,didn:7,differ:[0,1,5,6,7,12],digit:[2,7],dimens:[6,12],dimension:12,directli:[1,2,5],directori:[0,2,3,5,7,8,9,14],disabl:[9,13],disable_tensorboard:9,discuss:[1,4,6],dish:10,displai:[0,3,7,12,13],divid:[0,7,12],document:[0,3,8,9,12,13],doe:[10,12,13],don:[1,7],done:[0,1,2,3,5,6,12,13],down:[9,12,13],download:[1,2,3,4,5,6,7,8],download_and_extract_dataset:8,download_data:6,download_model:6,draw:[3,7],drawmark:1,drawn:[2,3],drive:1,dropout:[3,7],dtype:[9,13],due:1,durat:0,dure:[0,3,6,7,9,13],e:[0,1,3,4,6,7,8,9,12,13],e_x:7,each:[0,1,2,3,5,6,7,8,9,12,13,14],earli:[0,10],earlystop:0,easi:[4,5,7],easiest:12,easili:[0,3,5,7,9,10],edg:5,edit:1,effect:[7,9,12],effici:[3,6,7,9,10],either:[0,7,9,12,13,14],element:[3,4,6,7,8,12,13],els:[1,2,3,4,5,6,7,8,9,10],embed:6,embedding_model:6,embeddingvector:6,emploi:1,empti:[0,6],enabl:[3,7,9],enable_grad:3,encapsul:13,encod:[2,5,6],encoder_weight:5,end:[0,2,3,5,6,7,8,9,12,13],enforc:12,enough:[2,7],entail:10,entir:[3,9,13],entri:13,entropi:[1,6,7,9],environ:10,epoch13:2,epoch3:2,epoch:[0,1,3,4,5,6,8,9,10,13],epoch_delai:0,epoch_metr:[7,8,9,10,12,13],epoch_numb:0,epochmetr:[7,9,12,13],equal:[0,8,12],equal_weight:0,equival:12,error:[1,2,9],especi:5,eta:0,etc:[0,2,3,5,7,12],eval:3,evalu:[0,3,5,9,10,12,13],evaluate_dataset:[7,9,13],evaluate_gener:[1,2,3,5,6,7,8,9,13],evaluate_on_batch:13,even:[3,5,7],everi:[0,3,6,7,8,9,12,13,14],everyth:[3,7,8,10],exampl:[0,1,2,3,4,5,6,7,9,11,12,13,14],example_count:3,except:[0,8,12,13,14],execut:0,exist:[0,1],exist_ok:[1,2,3,5,6,7,8],exp:[1,7,8,9],expand:5,expect:[0,3,12],experi:[0,1,3,7,8,10],experiment:9,experiment_nam:0,experiment_train:8,expir:0,explain:6,explan:6,exponenti:0,exponentiallr:0,extend:6,extens:14,extern:6,extract:[1,2,6,8],extract_dest:8,extractal:[1,8],ey:10,f1:[6,7,8,9,10,12,13],f1score:10,f:[0,1,6,12,13],face:1,facial:1,factor:[5,12],fail:1,failur:2,fals:[0,1,2,3,4,5,6,7,8,9,12,13,14],fascin:5,fast:0,fasttext:6,fbeta:12,fc:[1,3,4,8],fc_net:3,fd:0,featur:[1,2,3,5,7,10],feed:10,feel:[3,5,7],femal:1,few:[1,5,7,12],field:[0,7,13],fig:[2,3,4,5,14],fig_kwarg:14,figsiz:[2,3,4,5],figur:[2,3,5,6,14],file:[0,1,2,3,5,7,8,9,10,13],file_list:1,filenam:[0,9,14],fileno:13,fill:0,filter:3,finali:1,find:[1,2,3,5,7,12],fine:[0,4,7],finetun:[2,3,5,7,9],finetune_fract:0,finetune_lr:0,finish:2,first:[0,2,3,4,5,6,7,8,12,13,14],fit:[0,9,10,13,14],fit_dataset:[7,9,12,13],fit_gener:[0,2,3,4,5,6,7,8,9,13],flag:13,flatten:[3,7,11],flexibl:[3,7],float32:[1,10,13],floattensor:6,floor:[2,3,7],fn:12,folder:[0,1],follow:[0,1,2,3,5,6,7,9,13,14],fonction:7,form:[9,13],format:[0,2,3,6,7,8,9,13],formul:5,forward:[1,2,3,5,6,7,12],found:[7,9,10],fp:12,fr:6,fraction:0,framework:[0,9,10],freez:8,freeze_weight:8,french:[6,10],frequenc:0,frequent:2,fri:10,from:[0,1,2,3,5,6,7,8,9,10,12,13,14],from_:9,from_model:9,from_network:[0,3,7,9,10,12],fscore:12,fscore_:12,fscore_micro:0,full:[2,3,4,7,8,10],full_dataset_length:2,full_network:6,full_train_dataset:[2,3,7],fulli:1,fullnetwork:6,fully_connected_network:6,func:[0,11,12,14],further:[3,5,7],furthermor:[7,9,13],futur:[9,13],g:[0,1,6,12,13],garneau:10,gender:10,gender_index:1,gener:[3,7,9,13,14],generaldeliveri:6,geq:12,get:[5,6,8,13],get_batch_s:[0,13],get_best_epoch_stat:9,get_metr:12,get_network:4,get_path:9,get_saved_epoch:9,get_weight:13,get_weight_copi:13,getattr:1,git:10,github:[6,10],give:[0,4,5,12],given:[3,6,7,9,10,12,13,14],global:12,go:[1,2,3,7,12],godbout:10,goe:0,gone:0,good:6,googl:[1,2,3,4,5,6,7,8,10],gpu:[2,3,4,5,9,10,13],graal:[1,6,8,10],gradient:[0,3,5],grain:[0,4],graph:0,gravi:10,grayscal:5,great:[3,7],grid:[3,5],ground:[1,2,3,5,6,9,12,13],ground_truth:[1,2,5],ground_truth_sampl:5,grow:0,gt:5,guarante:13,guidelin:10,h:1,h_scale:1,ha:[0,2,5,7,9,10,12,13],hand:[2,13],handl:[5,9,10],happen:0,harmon:12,has_ground_truth:13,have:[0,1,2,3,4,5,6,7,8,9,10,12,13,14],head:8,help:[1,5,7,10],henc:[1,2],here:[1,2,3,4,5,6,7,8,9,12,13],hidden:[6,8],hidden_s:6,hidden_st:6,hidden_state_s:10,high:[1,5],higher:5,highest:6,highlight:0,hight:1,histori:[4,7,9,13,14],home:0,hood:[7,10],how:[0,1,4,5,7,10,13],howev:[1,2,5,7,10,12],html:3,http:[0,1,3,6,8,10],huge:1,hyperparamet:[2,3,5],i:[0,3,4,6,7,8,9,12,13],idea:6,identifi:[1,12],identity_celeba:1,idx:6,idx_predict:6,idx_tag:6,idx_to_tag:6,idxmax:8,if_exist:6,ift:[1,8],ignor:[0,6,9,12,13],ignore_index:12,iid:10,imag:[1,3,8,10],image_reconstruct:10,image_rgb:1,image_s:[1,2,5],image_set:5,imagefold:8,imagenet:[1,5,8],imagenet_mean:[1,4,5],imagenet_std:[1,4,5],imagereconstructiondataset:2,imbal:12,img_align_celeba:1,impact:0,imper:2,implement:[0,1,3,7,12,13],imposs:6,improv:[0,6,7,9],imshow:[1,2,3,5],in_channel:[3,7],in_featur:[1,8],includ:9,inconsist:13,increas:[0,1,5,7],index:[2,6,10],indic:[2,3,6],inf:[0,9,12],infer:[0,9,13],infer_data:9,infer_dataset:9,inform:[0,1,6,7,9,12],inherit:[0,12],initi:[3,9,13],initial_epoch:[2,13],initial_step:0,initial_temperatur:7,inp:[2,3,5],input:[2,3,5,6,7,9,10,11,12,13],input_dim:6,input_grid:[2,3,5],input_imag:2,input_s:6,input_sampl:5,input_transform:5,insert:9,insid:[2,5,9,13,14],inspir:10,instal:[1,4,5,7],instanc:[0,7,9,12],instanci:[9,14],instanti:[0,7],instead:[0,6,7,9,12,13],institut:10,int64:[10,13],integ:[0,6,12],integr:13,intellig:10,interact:[0,2],interest:5,interfac:[0,7,10],intern:13,interpret:12,interv:0,introduct:10,intuit:[9,12],invers:6,io:[0,6],ip:0,ip_address:0,ipynb:10,is_avail:[1,2,3,4,5,6,7,8,10],is_better_than:9,is_valid_fil:8,issu:13,item:[1,5,6],iter:[0,2,3,4,5,7,12,13],its:[1,2,3,5,7,8,9,10,12],itself:13,join:[2,3,5,6,7,8],jupyt:14,just:[0,4,9,13],k:12,keep:[9,12],keep_bia:0,keep_only_last_best:[0,9],keepdim:7,kei:[0,6,9,12,13],kept:[0,9,12],kera:[0,10],kernel_s:[3,7],keyword:[0,7,9,12,13,14],kill:0,kind:12,know:12,known:[6,10,12],kwarg:[0,7,9,12,13],label:[2,5,6,7,12,14],label_numb:12,lai:3,lambda:[0,6,8,11,12],lambdacallback:0,lambdalr:0,landmark:1,larg:[0,1],larger:0,last:[0,1,2,7,8,9],last_epoch:[3,7,8],last_weight:[2,5],lastli:9,later:[0,6],latest:[0,2,3,4,5,7,8,10],latex:10,laval:10,laviolett:10,layer:[0,1,3,5,9,10],lazi:0,learn:[0,2,3,6,7,9,12],learning_r:[1,2,3,5,7,8],least:0,left:[1,14],legend:[1,8],len:[2,3,4,6,7,8,13],length:[0,6,14],leq:12,less:0,let:[1,2,3,4,5,6,7,8],level:5,lgplv3:10,librari:[1,3,5,10,12],licens:[0,12],lightgreen_ex:7,like:[0,1,3,4,6,9,12,13],line:[0,1,3,7,9],linear:[0,1,3,4,6,7,8,9,10,13],linearlr:0,link:5,linspac:[0,4],list:[0,2,3,4,6,7,9,12,13,14],list_attr_celeba:1,list_bbox_celeba:1,list_eval_partit:1,list_landmarks_align_celeba:1,littl:6,ll:4,load:[1,6,8,9,13],load_checkpoint:[1,9],load_model:6,load_optimizer_st:[0,13],load_stat:0,load_weight:[8,13],loader:[2,3,7],loc:8,local:[0,1],locat:10,log:[1,2,3,5,6,7,8,9,10,12,13],log_config_param:0,log_metr:0,log_param:0,logger:0,logic:13,logit:[3,7,12],longer:13,longest:6,longtensor:6,look:[1,3,6,10],loop:[3,7,13],loss:[0,2,3,5,6,8,9,10,12,13],loss_cl:1,loss_funct:[0,1,3,6,7,8,9,13],loss_reg1:1,loss_reg2:1,loss_reg3:1,loss_reg4:1,loss_sum:3,lot:12,low:[2,5],lower:[1,5],lr:[1,2,3,4,5,6,7,8,9],lr_schedul:[0,9],lrschedulercheckpoint:[0,9],lstm:6,lstm_network:6,lstm_out:6,m:3,macro:[7,12],made:[0,5,13],magic:7,mai:[0,12,13],main:[1,9,12,13],make:[0,5,9,10,14],make_grid:[1,2,3,5],makedir:[1,2,3,5,6,7,8],male:1,manag:[0,9],mani:[0,5,13],manual:4,manual_se:7,map:[0,2,5,6,12,13],marc:10,markdown:0,mask:12,math:[1,2,3,7],mathieu:10,matplotlib:[1,2,3,4,5,7,8,14],matrix:12,matter:[0,10],max:[0,3,7,8,9],max_norm:0,maxim:0,maxpool2d:[2,3,7],maxpool:3,mean:[1,2,3,5,9,10,12,13],measur:12,medium:10,memori:[6,12,14],mention:[1,5],merg:[9,13],messag:[0,7],method:[0,1,2,3,5,6,7,9,10,13],metric:[0,2,6,8,9,10,13,14],metric_1:12,metric_2:12,metric_collect:12,metric_nam:[0,9],metric_value_color:[0,7],metriccollect:12,micro:[7,8,12],middl:0,might:[0,10],min:[0,9],min_delta:0,mini:13,minim:[0,6],minimum:0,misc:10,miss:13,missing_kei:13,mit:0,mlflow:0,mlflow_logg:0,mlflowlogg:0,mlrun:0,mnist:7,mode:[0,3,7,8,9,12],model:[0,1,2,3,5,6,7,8,9,10,12],model_bundl:[0,3,7,10],model_nam:1,model_select:8,model_zoo:8,modelbundl:[0,10,12],modelcheckpoint:[0,1,2,3,5,7,8,9],modifi:[0,12,13],modul:[0,1,2,3,6,7,9,10,11,13],modulelist:11,momentum:[0,2,4],monitor:[0,1,3,7,8,9],monitor_metr:9,monitor_mod:9,more:[0,3,5,6,7,8,9,10,12,13],moreov:[1,5,9],most:[2,3,6,7],move:0,mse:12,mse_loss:[1,12],mseloss:[1,2,5],much:10,multi:[1,9,13],multi_class:7,multipl:[7,9,13],multipli:[0,3,7],multiplicativelr:0,multisteplr:0,multitask:10,municip:6,must:[0,6,9,10,12,13,14],my:7,my__epoch_metr:13,my_batch_metr:13,my_classification_network:10,my_custom_metr:12,my_custom_metric2:12,my_custom_metric3:12,my_epoch_metr:12,my_flatten:11,my_metr:13,my_metric1:13,my_metric1_fn:13,my_metric2:13,my_metric2_fn:13,my_metric_fn:13,myepochmetricclass:13,n:[0,3,8,12,13],n_epoch:8,n_previou:9,name:[0,1,3,6,8,9,12,13,14],named_paramet:8,namedtupl:13,nan:0,ndarrai:[9,13],necessari:[0,1,3,4,7],necessarili:13,need:[0,1,2,3,4,5,6,7,8,9,10,12,13],neg:12,net:5,network:[0,2,4,5,8,9,10,12,13],neural:[0,2,5,7,9,10,13],neuron:[1,3,8],newer:0,next:[2,3,5],nice:[3,7],nicola:10,nn:[0,1,2,3,4,5,6,7,8,9,10,11,13],no_grad:3,node:[9,13],none:[0,6,9,12,13,14],norm_coef:8,norm_typ:0,normal:[1,4,5,7,8],notabl:9,note:[0,2,9,12,13],notebook:[1,2,3,4,5,6,7,8,10,14],notic:[1,5,7,10,13],notif_callback:0,notificationcallback:0,now:[1,2,3,6,7,8,9,10,14],np:[1,2,3,5,7,8,10,13,14],num_class:[1,3,7,8,9,10,12,13],num_data:[3,7],num_epoch:[1,2,3,5,7,13],num_featur:[1,9,10,13],num_lay:6,num_test_sampl:10,num_train_sampl:[9,10,13],num_valid_sampl:[9,10,13],num_work:[3,4,6,7,8,13],number:[0,1,3,4,5,6,7,8,9,12,13,14],numer:[5,9],numpi:[1,2,3,5,6,7,8,9,10,12,13,14],numpy_to_torch:14,obj:14,object:[0,3,7,8,9,13,14],obtain:[2,5],obvious:[7,13],occur:9,occurr:12,off:[1,5],offer:[10,12],often:[9,13],older:0,omit:[0,13],ommit:13,on_backward_end:0,on_epoch_begin:0,on_epoch_end:0,on_predict_batch_begin:0,on_predict_batch_end:0,on_predict_begin:0,on_predict_end:0,on_test_batch_begin:0,on_test_batch_end:0,on_test_begin:0,on_test_end:[0,13],on_train_batch_begin:[0,7],on_train_batch_end:0,on_train_begin:0,on_train_end:0,on_valid_batch_begin:0,on_valid_batch_end:0,on_valid_begin:0,on_valid_end:0,onc:[3,7,13],one:[0,3,4,5,6,7,8,9,10,12,13],one_cycle_phas:[0,4],onecyclelr:0,ones:[4,9],onli:[0,1,3,4,6,7,9,10,12,13,14],open:[0,6,8],open_mod:0,opencv:1,optim:[0,1,2,3,4,5,6,8,9,10,13],optimi:13,optimizercheckpoint:[0,9],optimizerpolici:[0,4],option:[0,7,9,12,13,14],order:[1,2,6,8,9,13,14],ordinari:10,org:[3,10],orient:6,origin:[1,2],os:[1,2,3,5,6,7,8],other:[0,2,3,5,7,11,13,14],otherwis:[9,12,13],ott:10,our:[0,1,2,3,6,7,8,9,10,13],ourselv:[3,7],out:[2,3,5],out_channel:[3,7],output:[0,1,2,3,5,6,7,8,9,12,13,14],output_grid:[2,5],output_sampl:5,over:[0,4,7],overal:12,overfit:[2,3,5],overrid:12,overridden:13,overwrit:[0,14],overwritten:0,ovr:7,own:[2,4,5,9,10],own_loss_funct:7,own_optim:7,p:[6,9],pack:6,pack_padded_sequ:6,pack_padded_sequences_vector:6,packag:[0,1,2,3,4,5,6,7,8],packedsequ:6,pad:[2,3,6,7],pad_collate_fn:6,pad_collate_fn_predict:6,pad_packed_sequ:6,pad_sequ:6,padded_sequences_label:6,padded_sequences_vector:6,padding_valu:6,page:3,panda:[1,8,9,14],paper:0,paradi:10,paradis_poutyne_a_simplified_2020:10,parallel:13,param:[0,6,8],param_nam:0,paramet:[0,1,2,3,5,6,7,8,9,11,12,13,14],pars:6,part:[1,2,6],pass:[0,3,6,7,9,12,13,14],path:[0,1,2,3,5,6,7,8,9],patienc:0,pd:[1,8,14],peopl:1,per:[0,6,9],perform:[1,2,3,6,7,9,10,12],period:0,periodicsavecallback:0,periodicsavelambda:0,permut:1,person:1,pertin:9,phase:0,pickl:[6,9],pip:[1,5,10],pixel:5,place:13,plai:5,plain:10,plan:9,pleas:2,plot:[1,3,4,8],plot_histori:[7,14],plot_metr:14,plt:[1,2,3,4,5,7,8],plu:13,png:14,point:0,polici:10,policy_interfac:10,pool:[2,3],port:0,portion:1,pos_label:12,posit:12,possibl:[3,5,6,7,12,13],postal:6,postalcod:6,poutin:10,poutyn:[1,4,6,7,8,9,11,12,13,14],poutyne_train:3,practic:3,pre:[1,4,5,6],preced:0,precis:[6,12,13],precision_:12,pred_i:13,predefin:[3,7],predetermin:6,predict:[0,1,2,3,5,7,9,10,12,13],predict_data:6,predict_data_vector:6,predict_dataset:[6,9,13],predict_gener:[6,9,13],predict_load:6,predict_on_batch:[2,5,13],prefer:2,prefix:[0,9],present:[0,3,4,6,7,8,10],pretrain:[1,4,8],pretti:4,previou:[2,3,5,6,7,8,9,13],previous:[5,9,13],print:[0,1,2,3,4,5,8,9,13],prioriti:9,probabl:[6,7,12],problem:[5,6,10],procedur:[9,14],process:[0,1,4,5,6,9,13],processor:[1,2,5],produc:5,profit:7,progress:[7,9,13],progress_bar:0,progress_bar_color:[0,7],progress_opt:[0,7,13],progressioncallback:[0,13],project:[0,12],proper:[1,5],proport:2,proposit:10,provid:[0,1,2,3,5,7,9,11,12,13],provinc:6,pull:13,purpos:[0,1,5],put:[0,1,12],pyplot:[1,2,3,4,5,7,8],python:[1,3,6,8,10,13,14],pytorch:[0,5,6,8,9,10,12,13,14],pytorch_accuraci:3,pytorch_network:[9,13],pytorch_test:3,pytorch_train:3,pytorch_train_one_epoch:3,qualifi:0,qualiti:[2,3,7],quantiti:0,quebec:10,quick:[3,4,7],quickli:[3,7],quit:[3,7,8],r:[1,6],rais:[12,13],rand:[9,13],randint:[9,10,13],randn:[10,13],random:[3,10,13,14],random_split:[3,7],random_st:8,randomhorizontalflip:4,rang:[0,1,3,9],rate:[0,3,6,7,8,9],rather:5,ratio:[1,12],ratio_color:[0,7],rb:[0,6],re:6,reach:12,read:[0,6,14],read_csv:[1,8],read_mod:0,readabl:0,readi:[0,5],realli:10,rec_error:2,recal:[12,13],recall_:12,receiv:0,recogn:5,recognit:1,recommend:0,reconstruct:10,record:[1,5],recunstruction_error_map_13epoch:2,recunstruction_error_map_3epoch:2,red:7,reduc:[3,7],reducelronplateau:0,reduct:12,refer:[0,5,13,14],reg:9,regard:[1,10,12],regress:[1,10],reinstanti:7,rel:1,relat:2,reload:[0,8],relu:[2,3,7,10],remain:8,remot:0,remov:[1,7,8],repeat:5,repetit:0,replac:[3,7,8,12,13],repres:[6,12],represent:[2,6],reproduc:[3,6,8,14],request:[6,8,12,13],requir:7,requires_grad:8,rescal:1,research:[5,6,10],reset:[0,12],resiz:[1,5,8],resnet18:[1,4,8],resnet34:5,resnet:[4,5,8,10],resolut:2,respect:[0,2,3,5,6,8,9,12],restart:0,restor:[0,8,9],restore_best:[0,2,3,5,7,8],restrict:7,result:[1,2,3,7,8,9,13],resum:[3,5,7,8,9,13],retrain:[3,7],retriev:[5,9],return_dict_format:13,return_ground_truth:[1,2,5,13],return_pr:[1,2,5,13],reus:6,revers:6,rid:10,right:[1,3,5,7,13],rnn:10,roc:7,roc_auc:7,roc_auc_scor:[7,12],roc_epoch_metr:7,role:5,root:4,root_url:6,row:[0,9],run:[0,1,2,3,4,5,6,7,8,10,13],s:[1,2,3,4,5,6,7,8,9,10,13,14],sacrif:7,sacrifi:3,sai:[6,7],same:[0,1,2,3,6,7,9,12,13,14],sampl:[1,2,5,9,12,13],sample_numb:[1,2,5],sample_prediction_result_13epoch:2,sample_prediction_result_3epoch:2,sample_weight:12,save:[0,1,2,3,5,7,8,9,10,13,14],save_base_dir:8,save_best_onli:[0,2,3,5,7,8],save_directori:14,save_every_epoch:9,save_extens:14,save_fil:0,save_filename_templ:14,save_optimizer_st:13,save_path:[2,3,5,7,8],save_weight:13,saving_dir:6,saving_directori:0,scale:1,schedul:9,scikit:[7,8,12],score:[0,1,7,8,9,12,13],search:[3,7],second:[3,6,7,8,12,14],section:[1,2,3,4,5,7,12],see:[0,1,2,3,4,5,6,7,8,9,10,12,13,14],seed:[0,3,6,8,9,14],seen:13,segment:10,segmentation_models_pytorch:5,select:[2,3,10],self:[1,2,6,7,9,12,13],semant:10,semantic_segment:10,send:[0,3,13],send_notif:0,sensit:0,sent:[9,13],sep:[1,8,13],separ:[0,2,3,5,7,8],seper:[1,2],seq_vector:6,sequenc:10,sequences_label:6,sequences_vector:6,sequenti:[3,6,7,10,11],server:0,set:[0,1,2,3,4,5,6,7,8,9,12,13,14],set_se:[1,2,3,5,6,7,8,14],set_titl:[2,5],set_weight:13,setup:7,sever:13,sgd:[1,3,4,6,7,8,9,10,12,13],sgdr:0,sgdr_phase:[0,4],shape:12,sharei:2,sharex:2,shell:0,shortcut:5,should:[0,1,2,9,12,13,14],show:[0,1,2,3,5,6,7,8,12,14],show_every_n_test_step:0,show_every_n_train_step:0,show_every_n_valid_step:0,show_on_valid:0,shown:[2,5,7,9],shuffl:[1,2,3,4,5,6,7,8,13],shutil:7,sigmoid:[1,2,12],signatur:[9,13],significantli:[9,12,13],similar:[0,1,5,8,9,10,12],simpl:[2,3,4,6,7,10],simple_exampl:9,simpler:[1,3,7],simplest:7,simpli:[2,5,12,13],simplifi:[3,10],simultan:[1,5],sinc:[0,1,2,3,6,7,8,10,12,13],singl:[1,3,6,7,9,12,13],size:[0,1,2,3,4,5,6,7,8,10,13],size_averag:1,sklearn:[7,8,12],sklearnmetr:[7,12],slack_notif:0,slacknotif:0,slide:10,slow:[9,12,13],smaller:0,smp:5,snapshot:6,so:[0,3,5,6,7,8,10,12,13],softmax:[6,7],some:[0,2,3,4,5,10,12],someth:[3,10],sometim:[3,7,12],somewher:14,sooner:5,sort:[6,9],sourc:[0,1,2,5,7,9,10,11,12,13,14],space:[0,6],span:0,special:12,specif:[0,1,3,7,9,13],specifi:[0,2,3,5,6,7,9,12,13],speed:6,split:[1,3,6,7,8],split_train_v:0,squar:[1,9],squeaki:10,stabl:10,stai:[2,13],standard:[7,9],start:[0,1,3,8,9,13],startswith:8,stat:[0,9,10],state:[0,2,6,9,12,13],state_dict:9,statist:[0,3,7,9,10,12],std:[1,5],stefan:10,step:[0,3,4,7,9,10,13],steplr:[0,1],steps_per_epoch:[0,4,13],still:7,stochast:[0,3],stop:[0,8,10,13],stopiter:13,store:[0,9],str:[0,3,7,9,12,13,14],straight:5,straightforward:9,stratifi:8,street:6,streetnam:6,streetnumb:6,strength:[10,12],strict:[9,13],strictli:7,stride:2,string:[7,9,12,13,14],structur:[9,10,13,14],style:13,subject:[0,10],subplot:[2,4,5,14],subprocess:13,subset:[0,1,2,3,8],succe:13,success:5,suffix:12,suggest:[9,12],sum:[0,1,7,12],summarywrit:0,supplementari:[9,13],support:[9,12,13,14],suppos:13,sure:[0,10],sy:6,sync:13,synthesi:1,t:[1,2,3,5,7,8],t_conv1:2,t_conv2:2,tabl:3,taccuraci:[3,8],tag:10,tag_dimens:6,tag_spac:6,tags_predict:6,tags_set:6,tags_to_idx:6,take:[0,1,4,5,6,7,8,9,12,13],tarfil:8,target:[0,2,6,8,9,12,13],target_imag:2,target_transform:5,target_transfrom:5,target_typ:1,task:[3,5,6,7,8,9,10],tb_logger:0,tb_tracker:0,temperatur:7,temperaturecallback:7,templat:7,temporari:0,temporary_filenam:0,tensor:[0,2,3,5,6,9,11,12,13,14],tensorboard:[0,9],tensorboardgradienttrack:0,tensorboardlogg:[0,9],tensordataset:[9,13],term:6,terminateonnan:0,test:[0,1,2,3,5,6,7,8,9,13],test_:0,test_acc:[0,3,6,7,8,9],test_data:[6,9,10],test_data_vector:6,test_dataload:[1,2],test_dataset:[1,2,3,7,8,9],test_dataset_new:2,test_f1:[7,8],test_fscore_micro:0,test_gener:[9,13],test_i:10,test_indic:8,test_load:[3,6,7,8],test_loss:[0,3,6,7,8,9],test_roc:7,test_subset:1,test_x:10,text:[0,6,12],text_color:[0,7],textiobas:6,textual:6,tf1:8,tfm:[1,2,5],tgz:8,tgz_filenam:8,th:0,than:[0,2,3,5,7,8,9,12],thei:[0,1,2,9,10,12,13],them:[0,1,2,3,4,6,7,9,12,13],thi:[0,1,2,3,4,5,6,7,8,9,12,13],thing:6,think:5,third:[3,7,14],those:[6,8,9,12,13],three:[3,7,12],threshold:12,through:[0,3,5,13],throughout:7,thu:[0,3,7,10,13],time:[0,1,3,4,5,6,7,8,9,10,13],time_color:[0,7],tip:[3,10],tips_and_trick:10,tips_and_tricks_asset:6,titl:[1,7,10,14],tloss:[3,8],tmp:0,togeth:[4,6,9,13],toi:10,token:6,tolist:6,tool:[2,5,7,9],top:12,topk:12,topkaccuraci:12,torch:[0,1,2,3,4,5,6,7,8,9,10,12,13],torch_appli:14,torch_metr:[9,12,13],torch_to_numpi:14,torchmetr:[9,10,13],torchvis:[1,2,3,4,5,7,8],total:[0,3,7,8,9,12,13],total_loss:1,total_step:0,totensor:[1,2,3,4,5,7,8],tp:[4,12],trace:9,track:9,tracking_uri:0,traffic:1,train:[8,9,10,12,13,14],train_acc:3,train_data:[6,9,10],train_data_vector:6,train_dataload:[1,2,5],train_dataset:[1,2,3,4,5,7,8,9,12,13],train_dataset_new:2,train_gener:[0,9,13],train_i:[9,10,13],train_indic:[2,3,8],train_length:7,train_load:[0,3,4,6,7,8],train_loss:[1,3],train_model_bundl:[3,7],train_on_batch:13,train_siz:8,train_split:[3,7],train_split_perc:[3,7],train_subset:1,train_test_split:8,train_transform:4,train_with_callback:3,train_x:[9,10,13],transfer:[3,10,13],transfer_learn:10,transform:[1,2,3,4,5,7,8],translat:5,transpos:[2,3,5,6],tremblai:10,tri:2,triangular:0,trick:[3,6,10],true_i:13,truth:[1,2,3,5,6,9,12,13],tsv:[1,2,3,5,7,8,9],tune:[0,3,7],tupl:[0,3,6,7,9,12,13,14],tutori:10,two:[2,5,6,9,10,12],two_task_exampl:1,txt:[0,1],type:[0,3,5,7,9,12,13,14],typl:0,u:[5,10],ulav:[1,8],under:[0,7,9,10,12,14],underfit:5,unet:5,unexpect:13,unexpected_kei:13,unidirect:6,union:[0,9,12,13,14],uniqu:0,unit:6,unless:13,unpack:6,unpad:6,until:[3,7],unweight:12,unzip:1,up:[0,6,7],updat:[0,3,4,6,7,8,12,13],uri:0,url:[1,6,10],urllib:8,urlretriev:8,us:[0,1,3,6,8,9,10,11,12,13,14],usa:10,usag:10,user:[0,7,10,13],usual:[0,1,3,5,7,10],util:[0,1,2,3,4,5,6,7,8,9,10,11,13],v2:12,va:10,val:5,val_:[0,9,12],val_acc:[0,3,7,8,9,12,13],val_accuraci:0,val_bin_acc:12,val_bin_fscor:12,val_bin_precis:12,val_bin_recal:12,val_fscore_:12,val_fscore_micro:0,val_loss:[0,1,3,8,9,13],val_ms:12,val_precision_:12,val_recall_:12,val_top:12,valid:[0,1,2,3,5,6,7,8,9,12,13],valid_acc:3,valid_data:6,valid_data_vector:6,valid_dataload:[1,2,5],valid_dataset:[1,2,3,4,5,7,8,9,12,13],valid_dataset_new:2,valid_gener:[0,9,13],valid_i:[9,10,13],valid_indic:[2,3,8],valid_length:7,valid_load:[0,3,4,6,7,8],valid_loss:[1,3],valid_split_perc:2,valid_subset:1,valid_test_indic:8,valid_transform:4,valid_x:[9,10,13],validation_data:[9,10,13],validation_step:13,valu:[0,3,4,6,7,9,12,13],vanilla:6,vanish:5,vari:1,variabl:6,variant:6,variat:1,varieti:7,variou:[3,7,9],vector:[1,6],vein:10,verbos:[0,2,3,5,7,8,9,13],veri:[0,5,8,9],versa:2,version:[4,10,11,12,13],versu:12,via:[3,9,12],vice:2,video:5,view:14,vision:[1,2,5],visual:[1,2],w:1,w_scale:1,wa:[0,12],wai:[0,1,6,7,10,12,13],want:[0,6,7],warm:0,warn:13,warning_set:13,wb:[0,6],we:[0,1,2,3,4,5,6,7,8,9,10,12,13],web:1,webhook_url:0,weekli:10,weight:[0,1,2,3,5,7,8,9,12,13],weight_decai:[1,8],welcom:10,well:[1,2,3,5,6,7,9,10],were:[12,13],wget:1,what:[0,10,12],when:[0,2,3,5,6,7,8,9,10,12,13,14],where:[3,6,7,9,12,13,14],wherea:12,whether:[0,9,10,12,13,14],which:[0,1,2,3,5,6,7,9,10,12,13,14],who:12,whole:[3,7,9],why:[3,6,7],width:1,wish:[3,7],without:[3,5,6,7,12,13,14],word:[2,5,6,13],work:[0,3,4,6,7,9,10,12],working_directori:[3,7],worst:12,worth:[1,5],would:[5,12],wrap:[2,7,12],wrapper:[0,2,3,7],write:[0,6],writer:0,written:[0,6],x:[1,2,3,6,7,9,11,13],x_l:1,x_r:1,x_val:[9,13],y:[1,3,6,9,13],y_l:1,y_pred:[1,3,7,12],y_r:1,y_true:[1,3,7,12],y_val:[9,13],year:[5,10],yield:[9,13],you:[0,1,2,4,5,6,7,9,10,12],your:[0,4,5,10],yourself:10,yuri:10,zero_grad:3,zip:[1,6],zipfil:1,ziphandl:1},titles:["Callbacks","Gender Classification and Eyes Location Detection: A Two Task Problem","Image Reconstruction Using Poutyne","Introduction to PyTorch and Poutyne","Interface of <code class=\"docutils literal notranslate\"><span class=\"pre\">policy</span></code>","Semantic segmentation using Poutyne","Sequence Tagging With an RNN","Tips and Tricks","Transfer learning example","Experiment and ModelBundle","Here is Poutyne","Layers","Metrics","Model","Utils"],titleterms:{"3":2,"class":[0,9],"function":[1,7,9,12],"new":6,A:[1,2,5],One:4,The:[4,6],With:[4,6],about:4,after:2,alreadi:4,an:6,api:[10,12],architectur:3,autoencod:2,basi:3,basic:[4,14],batch:[2,5,12],blog:10,build:4,bypass:7,calcul:5,callback:[0,3,7],celeba:1,checkpoint:0,cifar:4,cite:10,classif:1,color:7,complex:4,comput:12,connect:[3,6],constant:[1,2,3,4,5,6,7],contribut:10,convolut:[2,3],custom:7,data:[1,4,6],dataload:[6,7],dataset:[1,2,3,5,6,7],defin:4,detect:1,differ:4,epoch:[2,7,12],evalu:[1,2],exampl:[8,10],experi:9,ey:1,fetch:1,few:10,from:4,full:6,fulli:[3,6],gender:1,get:10,gpu:7,here:10,high:0,hyperparamet:7,imag:[2,5],indic:10,initi:7,initil:7,instal:10,interfac:[4,12],introduct:3,last:5,layer:[6,11],learn:[8,10],level:0,licens:10,load:[2,3,4,5,7],locat:1,log:0,loop:6,loss:[1,7],lr:0,make:[3,7],materi:10,metric:[7,12],mnist:[2,3],model:[4,13],modelbundl:[3,7,9],modul:4,more:2,multi:7,multipl:[4,12],name:[7,10],network:[1,3,6,7],neural:[3,6],note:5,notif:0,object:12,onc:12,optim:7,orient:12,own:[3,7],paramet:4,phase:4,plot:[7,14],polici:[0,4],post:10,poutyn:[0,2,3,5,10],predefin:12,predict:6,problem:1,process:2,progress:0,pytorch:[3,7],random:[2,5],reconstruct:2,recurr:6,refer:10,result:[0,5],resum:2,rnn:6,s:0,schedul:0,score:5,second:[2,10],segment:5,semant:5,sequenc:6,space:4,start:10,summari:6,tabl:10,tag:6,task:1,thi:10,tip:7,torch:14,torchmetr:12,track:0,train:[0,1,2,3,4,5,6,7],transfer:8,trick:7,two:1,us:[2,4,5,7],usag:7,util:14,vanilla:7,video:10,visual:[4,5],vocsegment:5,vodsegment:5,wai:3,why:10,without:4,your:[3,7],yourself:7}})