�}�'   �Ғa������ 	��&�����B��=\bm�ѰzK��\�F~�M�C}�-��3�H�������7����q3>�j~s��֚�8�ʞ�?��6��3���Ī�ЅOo�?Ū��Jßn���4�}�79u%'p����-�-�	ˇ+�_��0*�:Yr�3����*��C`�`=�qc���p-_N�����������$��'T}�vI~Ųrx����Ҋ�U �!��I����Te8۔ӆ`����
1Y�����a��� �pD��-��2C{Vs��-����n�ݢ�V*xAxx��@��
��?ющ�f~>aG��kYDH��2Mk�D=	iC����u����P�׌����I����v[�����ϭ���U�T
:��W���2��{a����m�Ԏ7M�b4�0���R�zR\$��p^ �ؼY�'�jS�$�R�#ɶ��&H3�M��˼H�3�@=;E�q4��3KX��v*�Y �l�3S�����.Wި��)��]�&+ƍ�����+5������K�~�˙��=������(~?[���.�j�V���f�Lg^� ���%#�66_>y���,臗4rF�U�G��m��骞��f��Z�M�+R ��<�!^��v��B:�Bd���X��T����@�xb[ ��AO��QRL�f��6XH5��$Fk�7S(<<ij(�Zo�iƏn�4/�C�D�V�1��m���--QFSL΂�*�?�T�ܜQ�;�F@/�7�gK�*��ރ����p��
T���LT�\x��zl���!��0x( S��Nn)~C��"a�$Z����?��A'��q$I�%���3q֖��"��+G�s�l]K��)��k�o�-t,��>�<��h�Aگ��>Y��)r����hq?�Cfpk��Ȃ߂99j�P�Q�gs�1V�5�gO&�	ZؑX��j�$���6!\#�T��^3O���vD�cҊ.P�C.�	�w[SȋK数,是个函数   
 */
function showError(e, callback) {
    try {
        //运行代码
        if(typeof callback == "function"){
        	callback();
        }
    } catch (err) {
        //在这里处理错误
        console.log("错误名字: " + err.name + "\n\n" + "错误描述：" + err.message);
        console.log(err);
    }
}

