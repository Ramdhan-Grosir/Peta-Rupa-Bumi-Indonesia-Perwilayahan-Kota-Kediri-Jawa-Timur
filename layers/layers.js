var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: 'ADMINISTRASIDESA_AR_25K',
                interactive: true,
    title: 'ADMINISTRASIDESA_AR_25K<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_0.png" /> BALOWERTI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_1.png" /> BANARAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_2.png" /> BANDAR KIDUL<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_3.png" /> BANDAR LOR<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_4.png" /> BANGSAL<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_5.png" /> BANJARAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_6.png" /> BANJAREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_7.png" /> BANJARMLATI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_8.png" /> BAWANG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_9.png" /> BETET<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_10.png" /> BLABAK<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_11.png" /> BOBANG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_12.png" /> BOGEM<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_13.png" /> BUJEL<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_14.png" /> BULU<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_15.png" /> BURENGAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_16.png" /> CAMPUREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_17.png" /> DANDANGAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_18.png" /> DERMO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_19.png" /> DOKO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_20.png" /> GAYAM<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_21.png" /> GOGORANTE<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_22.png" /> JABON<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_23.png" /> JAGALAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_24.png" /> JAMSAREN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_25.png" /> JANTI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_26.png" /> JONGBIRU<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_27.png" /> KALIOMBO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_28.png" /> KAMPUNGDALEM<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_29.png" /> KEDAK<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_30.png" /> KEMASAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_31.png" /> KETAMI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_32.png" /> KWADUNGAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_33.png" /> LIRBOYO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_34.png" /> MANGUNREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_35.png" /> MANISRENGGO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_36.png" /> MANYARAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_37.png" /> MARON<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_38.png" /> MOJOROTO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_39.png" /> MRICAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_40.png" /> NGABLAK<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_41.png" /> NGADIREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_42.png" /> NGAMPEL<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_43.png" /> NGLETIH<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_44.png" /> NGRECO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_45.png" /> NGRONGGO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_46.png" /> PAGU<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_47.png" /> PAKELAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_48.png" /> PAKUNDEN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_49.png" /> PESANTREN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_50.png" /> POCANAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_51.png" /> POJOK<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_52.png" /> REJOMULYO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_53.png" /> SEMAMPIR<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_54.png" /> SEMEN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_55.png" /> SETONOBETEK<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_56.png" /> SETONOGEDONG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_57.png" /> SIDOMULYO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_58.png" /> SILIR<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_59.png" /> SINGONEGARAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_60.png" /> SUKORAME<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_61.png" /> SUKOREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_62.png" /> TAMANAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_63.png" /> TEMPUREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_64.png" /> TINALAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_65.png" /> TOSAREN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_66.png" /> TUGUREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_67.png" /> WONOJOYO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_68.png" /> WONOREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_69.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ADMINISTRASIDESA_AR_25K_1];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ADMINISTRASIDESA_AR_25K_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});