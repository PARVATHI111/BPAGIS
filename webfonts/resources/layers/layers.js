var wms_layers = [];

var format_Bharathapuzha_0 = new ol.format.GeoJSON();
var features_Bharathapuzha_0 = format_Bharathapuzha_0.readFeatures(json_Bharathapuzha_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bharathapuzha_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bharathapuzha_0.addFeatures(features_Bharathapuzha_0);
var lyr_Bharathapuzha_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bharathapuzha_0, 
                style: style_Bharathapuzha_0,
                popuplayertitle: "Bharathapuzha",
                interactive: true,
                title: '<img src="styles/legend/Bharathapuzha_0.png" /> Bharathapuzha'
            });
var format_drainageclip_1 = new ol.format.GeoJSON();
var features_drainageclip_1 = format_drainageclip_1.readFeatures(json_drainageclip_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_drainageclip_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_drainageclip_1.addFeatures(features_drainageclip_1);
var lyr_drainageclip_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_drainageclip_1, 
                style: style_drainageclip_1,
                popuplayertitle: "drainageclip",
                interactive: true,
                title: '<img src="styles/legend/drainageclip_1.png" /> drainageclip'
            });
var format_soilclip_2 = new ol.format.GeoJSON();
var features_soilclip_2 = format_soilclip_2.readFeatures(json_soilclip_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_soilclip_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_soilclip_2.addFeatures(features_soilclip_2);
var lyr_soilclip_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_soilclip_2, 
                style: style_soilclip_2,
                popuplayertitle: "soilclip",
                interactive: true,
    title: 'soilclip<br />\
    <img src="styles/legend/soilclip_2_0.png" /> clay<br />\
    <img src="styles/legend/soilclip_2_1.png" /> gravelly clay<br />\
    <img src="styles/legend/soilclip_2_2.png" /> gravelly loam<br />\
    <img src="styles/legend/soilclip_2_3.png" /> loam<br />\
    <img src="styles/legend/soilclip_2_4.png" /> <br />'
        });
var format_geomorphologyclip_3 = new ol.format.GeoJSON();
var features_geomorphologyclip_3 = format_geomorphologyclip_3.readFeatures(json_geomorphologyclip_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geomorphologyclip_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geomorphologyclip_3.addFeatures(features_geomorphologyclip_3);
var lyr_geomorphologyclip_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geomorphologyclip_3, 
                style: style_geomorphologyclip_3,
                popuplayertitle: "geomorphologyclip",
                interactive: true,
    title: 'geomorphologyclip<br />\
    <img src="styles/legend/geomorphologyclip_3_0.png" /> Channel bar(Flood Plain)<br />\
    <img src="styles/legend/geomorphologyclip_3_1.png" /> Denudational Hills<br />\
    <img src="styles/legend/geomorphologyclip_3_2.png" /> Denudational Structural Hills<br />\
    <img src="styles/legend/geomorphologyclip_3_3.png" /> Linear ridge(Lower Plateau)<br />\
    <img src="styles/legend/geomorphologyclip_3_4.png" /> Linear ridge(Piedmont Zone)<br />\
    <img src="styles/legend/geomorphologyclip_3_5.png" /> Lower Plateau (Lateritic) - Dissected<br />\
    <img src="styles/legend/geomorphologyclip_3_6.png" /> Pediplain Weathered<br />\
    <img src="styles/legend/geomorphologyclip_3_7.png" /> Piedmont Zone<br />\
    <img src="styles/legend/geomorphologyclip_3_8.png" /> Point bar(Flood Plain)<br />\
    <img src="styles/legend/geomorphologyclip_3_9.png" /> Residual Hill<br />\
    <img src="styles/legend/geomorphologyclip_3_10.png" /> Residual Mount<br />\
    <img src="styles/legend/geomorphologyclip_3_11.png" /> Residual Mount(Pediment)<br />\
    <img src="styles/legend/geomorphologyclip_3_12.png" /> Rock Exposure<br />\
    <img src="styles/legend/geomorphologyclip_3_13.png" /> Structural Hills<br />\
    <img src="styles/legend/geomorphologyclip_3_14.png" /> Valley<br />\
    <img src="styles/legend/geomorphologyclip_3_15.png" /> Valley Fill<br />\
    <img src="styles/legend/geomorphologyclip_3_16.png" /> Water Body<br />\
    <img src="styles/legend/geomorphologyclip_3_17.png" /> <br />'
        });
var format_roadclip_4 = new ol.format.GeoJSON();
var features_roadclip_4 = format_roadclip_4.readFeatures(json_roadclip_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roadclip_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roadclip_4.addFeatures(features_roadclip_4);
var lyr_roadclip_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roadclip_4, 
                style: style_roadclip_4,
                popuplayertitle: "roadclip",
                interactive: true,
                title: '<img src="styles/legend/roadclip_4.png" /> roadclip'
            });
var format_DAM2_5 = new ol.format.GeoJSON();
var features_DAM2_5 = format_DAM2_5.readFeatures(json_DAM2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DAM2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DAM2_5.addFeatures(features_DAM2_5);
var lyr_DAM2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DAM2_5, 
                style: style_DAM2_5,
                popuplayertitle: "DAM2",
                interactive: true,
                title: '<img src="styles/legend/DAM2_5.png" /> DAM2'
            });

lyr_Bharathapuzha_0.setVisible(true);lyr_drainageclip_1.setVisible(true);lyr_soilclip_2.setVisible(true);lyr_geomorphologyclip_3.setVisible(true);lyr_roadclip_4.setVisible(true);lyr_DAM2_5.setVisible(true);
var layersList = [lyr_Bharathapuzha_0,lyr_drainageclip_1,lyr_soilclip_2,lyr_geomorphologyclip_3,lyr_roadclip_4,lyr_DAM2_5];
lyr_Bharathapuzha_0.set('fieldAliases', {'PERIMETER': 'PERIMETER', 'KERWSDRP_': 'KERWSDRP_', 'KERWSDRP_I': 'KERWSDRP_I', 'WSCODE': 'WSCODE', 'WSCODE1': 'WSCODE1', 'NRIS': 'NRIS', 'WSNAME': 'WSNAME', 'AREA': 'AREA', });
lyr_drainageclip_1.set('fieldAliases', {'fid': 'fid', 'ORDER1': 'ORDER1', });
lyr_soilclip_2.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'KERSOIL_': 'KERSOIL_', 'KERSOIL_ID': 'KERSOIL_ID', 'CODE': 'CODE', 'MAP_SYMBOL': 'MAP_SYMBOL', 'DEPTH': 'DEPTH', 'TEXTURE': 'TEXTURE', 'SLOPE': 'SLOPE', 'DRAINAGE': 'DRAINAGE', });
lyr_geomorphologyclip_3.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_roadclip_4.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'Length': 'Length', });
lyr_DAM2_5.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'PHOTO': 'PHOTO', });
lyr_Bharathapuzha_0.set('fieldImages', {'PERIMETER': '', 'KERWSDRP_': '', 'KERWSDRP_I': '', 'WSCODE': '', 'WSCODE1': '', 'NRIS': '', 'WSNAME': '', 'AREA': '', });
lyr_drainageclip_1.set('fieldImages', {'fid': 'TextEdit', 'ORDER1': 'Range', });
lyr_soilclip_2.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'KERSOIL_': 'Range', 'KERSOIL_ID': 'Range', 'CODE': 'Range', 'MAP_SYMBOL': 'TextEdit', 'DEPTH': 'TextEdit', 'TEXTURE': 'TextEdit', 'SLOPE': 'TextEdit', 'DRAINAGE': 'TextEdit', });
lyr_geomorphologyclip_3.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_roadclip_4.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_DAM2_5.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'PHOTO': 'ExternalResource', });
lyr_Bharathapuzha_0.set('fieldLabels', {'PERIMETER': 'no label', 'KERWSDRP_': 'no label', 'KERWSDRP_I': 'no label', 'WSCODE': 'no label', 'WSCODE1': 'no label', 'NRIS': 'no label', 'WSNAME': 'no label', 'AREA': 'no label', });
lyr_drainageclip_1.set('fieldLabels', {'fid': 'no label', 'ORDER1': 'no label', });
lyr_soilclip_2.set('fieldLabels', {'fid': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'KERSOIL_': 'no label', 'KERSOIL_ID': 'no label', 'CODE': 'no label', 'MAP_SYMBOL': 'no label', 'DEPTH': 'no label', 'TEXTURE': 'inline label - always visible', 'SLOPE': 'no label', 'DRAINAGE': 'no label', });
lyr_geomorphologyclip_3.set('fieldLabels', {'fid': 'no label', 'NAME': 'inline label - always visible', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_roadclip_4.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'Length': 'no label', });
lyr_DAM2_5.set('fieldLabels', {'id': 'no label', 'NAME': 'inline label - always visible', 'PHOTO': 'no label', });
lyr_DAM2_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});