console.log("embed.js");
// parseUri 1.2.2
// (c) Steven Levithan <stevenlevithan.com>
// MIT License
(function(global) {
    if(typeof(window.bokeh_embed_count) == "undefined"){
        window.bokeh_embed_count = 0;
    }
    else {
        window.bokeh_embed_count += 1;
    }
    if(window.bokeh_embed_count == 1) {
//        debugger;
    }
    var host = "";

    var staticRootUrl = "/opendatacomparison/static/";
    if (host!=""){

        staticRootUrl = "//" + host + "/bokehjs/static/";
        var bokehJSUrl = staticRootUrl + "js/bokeh.js";
    }
    else {
        bokehJSUrl = staticRootUrl +"js/bokeh.js";
    }

    var all_models = [{"attributes": {"doc": null, "id": "8cc4ebf6-97b2-4882-a4cf-83cafc70a023", "factors": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"]}, "type": "FactorRange", "id": "8cc4ebf6-97b2-4882-a4cf-83cafc70a023"}, {"attributes": {"doc": null, "id": "a6405cac-8b51-4af4-8af3-b5719ecfc0a7", "factors": ["NP - Nepal Open Contract Data - Contracts"]}, "type": "FactorRange", "id": "a6405cac-8b51-4af4-8af3-b5719ecfc0a7"}, {"attributes": {"doc": null, "id": "8cfd9267-d4e7-4e4e-995c-76cabd1b4ee7"}, "type": "CategoricalTickFormatter", "id": "8cfd9267-d4e7-4e4e-995c-76cabd1b4ee7"}, {"attributes": {"doc": null, "id": "e1e47039-5e4a-4b57-b671-2dd475fc4820"}, "type": "CategoricalTicker", "id": "e1e47039-5e4a-4b57-b671-2dd475fc4820"}, {"attributes": {"plot": {"type": "Plot", "id": "9b3aa575-d6b6-4981-aa7e-68a99856e7c3"}, "doc": null, "bounds": "auto", "id": "59d79b7c-7f59-4c58-917b-fff37a10e4b7", "location": "min", "major_label_orientation": 0.7853981633974483, "formatter": {"type": "CategoricalTickFormatter", "id": "8cfd9267-d4e7-4e4e-995c-76cabd1b4ee7"}, "ticker": {"type": "CategoricalTicker", "id": "e1e47039-5e4a-4b57-b671-2dd475fc4820"}, "dimension": 0}, "type": "CategoricalAxis", "id": "59d79b7c-7f59-4c58-917b-fff37a10e4b7"}, {"attributes": {"plot": {"type": "Plot", "id": "9b3aa575-d6b6-4981-aa7e-68a99856e7c3"}, "grid_line_color": null, "doc": null, "dimension": 0, "id": "e87c664e-dfa6-42fd-adb8-5035c0a04d90", "axis": {"type": "CategoricalAxis", "id": "59d79b7c-7f59-4c58-917b-fff37a10e4b7"}}, "type": "Grid", "id": "e87c664e-dfa6-42fd-adb8-5035c0a04d90"}, {"attributes": {"doc": null, "id": "40987b66-1031-4f03-b17f-1c1ede134a00"}, "type": "CategoricalTickFormatter", "id": "40987b66-1031-4f03-b17f-1c1ede134a00"}, {"attributes": {"doc": null, "id": "1edacd96-dd28-4edf-8804-c98459f29a16"}, "type": "CategoricalTicker", "id": "1edacd96-dd28-4edf-8804-c98459f29a16"}, {"attributes": {"plot": {"type": "Plot", "id": "9b3aa575-d6b6-4981-aa7e-68a99856e7c3"}, "doc": null, "bounds": "auto", "id": "9b176dfd-6a87-4c92-8629-70a5982fcf6a", "location": "min", "formatter": {"type": "CategoricalTickFormatter", "id": "40987b66-1031-4f03-b17f-1c1ede134a00"}, "ticker": {"type": "CategoricalTicker", "id": "1edacd96-dd28-4edf-8804-c98459f29a16"}, "dimension": 1}, "type": "CategoricalAxis", "id": "9b176dfd-6a87-4c92-8629-70a5982fcf6a"}, {"attributes": {"plot": {"type": "Plot", "id": "9b3aa575-d6b6-4981-aa7e-68a99856e7c3"}, "grid_line_color": null, "doc": null, "dimension": 1, "id": "aedfbf35-0501-4d1c-80c0-a2c1c7e44cf0", "axis": {"type": "CategoricalAxis", "id": "9b176dfd-6a87-4c92-8629-70a5982fcf6a"}}, "type": "Grid", "id": "aedfbf35-0501-4d1c-80c0-a2c1c7e44cf0"}, {"attributes": {"column_names": ["radii", "concept", "datamap", "fields_in_concept"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"radii": [5, 15, 5, 0, 0, 10, 10, 0, 15, 0, 0, 10, 5, 0, 5], "concept": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"], "datamap": ["NP - Nepal Open Contract Data - Contracts", "NP - Nepal Open Contract Data - Contracts", "NP - Nepal Open Contract Data - Contracts", "NP - Nepal Open Contract Data - Contracts", "NP - Nepal Open Contract Data - Contracts", "NP - Nepal Open Contract Data - Contracts", "NP - Nepal Open Contract Data - Contracts", "NP - Nepal Open Contract Data - Contracts", "NP - Nepal Open Contract Data - Contracts", "NP - Nepal Open Contract Data - Contracts", "NP - Nepal Open Contract Data - Contracts", "NP - Nepal Open Contract Data - Contracts", "NP - Nepal Open Contract Data - Contracts", "NP - Nepal Open Contract Data - Contracts", "NP - Nepal Open Contract Data - Contracts"], "fields_in_concept": ["ContractAwardID", "ContractAmount, ContractAmountUsd, ContractCurrency", "DateOfAward", "", "", "EndDate, StartDate", "ContractAwardSource, TransactionID", "", "ProcurementCategory, TransactionTitle, WrittenDescription", "", "", "ContractorCountry, ContractorName", "ProjectID", "", "TenderNoticeSource"]}, "id": "b5ac0f05-ed85-4e3d-9446-77776cc17ec9"}, "type": "ColumnDataSource", "id": "b5ac0f05-ed85-4e3d-9446-77776cc17ec9"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "b5ac0f05-ed85-4e3d-9446-77776cc17ec9"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "height": {"units": "data", "value": 1}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "line_alpha": {"units": "data", "value": 0.1}, "angle": {"units": "data", "field": "angle"}, "dilate": false, "radius_units": "screen", "width": {"units": "data", "value": 1}, "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "rect", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "white"}, "line_alpha": {"units": "data", "value": 1.0}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "white"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "height": {"units": "data", "value": 1}, "width": {"units": "data", "value": 1}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "rect"}, "id": "a0768ccf-5e13-4236-b85b-b94068641fa8"}, "type": "Glyph", "id": "a0768ccf-5e13-4236-b85b-b94068641fa8"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "b5ac0f05-ed85-4e3d-9446-77776cc17ec9"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "visible": null, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": "radii"}, "line_alpha": {"units": "data", "value": 0.1}, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "circle", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "black"}, "line_alpha": {"units": "data", "value": 1.0}, "fill_color": {"value": "black"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "circle", "size": {"units": "screen", "default": 4, "field": "radii"}}, "id": "9a92803b-b4b9-4d9a-a2b6-406b4b3111c3"}, "type": "Glyph", "id": "9a92803b-b4b9-4d9a-a2b6-406b4b3111c3"}, {"attributes": {"plot": {"type": "Plot", "id": "9b3aa575-d6b6-4981-aa7e-68a99856e7c3"}, "id": "5c3dbe26-d9f3-43bd-a0b7-a5cfbf46537c", "doc": null}, "type": "ResizeTool", "id": "5c3dbe26-d9f3-43bd-a0b7-a5cfbf46537c"}, {"attributes": {"plot": {"type": "Plot", "id": "9b3aa575-d6b6-4981-aa7e-68a99856e7c3"}, "id": "9865791f-1ceb-4d65-9ee3-cad44162a9f1", "doc": null}, "type": "PreviewSaveTool", "id": "9865791f-1ceb-4d65-9ee3-cad44162a9f1"}, {"attributes": {"outer_height": 300, "x_range": {"type": "FactorRange", "id": "8cc4ebf6-97b2-4882-a4cf-83cafc70a023"}, "y_range": {"type": "FactorRange", "id": "a6405cac-8b51-4af4-8af3-b5719ecfc0a7"}, "outer_width": 1200, "renderers": [{"type": "CategoricalAxis", "id": "59d79b7c-7f59-4c58-917b-fff37a10e4b7"}, {"type": "Grid", "id": "e87c664e-dfa6-42fd-adb8-5035c0a04d90"}, {"type": "CategoricalAxis", "id": "9b176dfd-6a87-4c92-8629-70a5982fcf6a"}, {"type": "Grid", "id": "aedfbf35-0501-4d1c-80c0-a2c1c7e44cf0"}, {"type": "Glyph", "id": "a0768ccf-5e13-4236-b85b-b94068641fa8"}, {"type": "Glyph", "id": "9a92803b-b4b9-4d9a-a2b6-406b4b3111c3"}], "height": 300, "width": 1200, "data_sources": [], "doc": null, "canvas_height": 300, "id": "9b3aa575-d6b6-4981-aa7e-68a99856e7c3", "title": null, "tools": [{"type": "HoverTool", "id": "199b7a56-f766-4331-82de-5fc2898cba4a"}, {"type": "ResizeTool", "id": "5c3dbe26-d9f3-43bd-a0b7-a5cfbf46537c"}, {"type": "PreviewSaveTool", "id": "9865791f-1ceb-4d65-9ee3-cad44162a9f1"}], "canvas_width": 1200}, "type": "Plot", "id": "9b3aa575-d6b6-4981-aa7e-68a99856e7c3"}, {"attributes": {"tooltips": {"Datamap": "@datamap", "Concept": "@concept", "Fields": "@fields_in_concept"}, "plot": {"type": "Plot", "id": "9b3aa575-d6b6-4981-aa7e-68a99856e7c3"}, "doc": null, "renderers": [], "id": "199b7a56-f766-4331-82de-5fc2898cba4a"}, "type": "HoverTool", "id": "199b7a56-f766-4331-82de-5fc2898cba4a"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "9b3aa575-d6b6-4981-aa7e-68a99856e7c3"}], "id": "cb56f42e-d82a-4ab0-abf6-9043aaa02cc3"}, "type": "PlotContext", "id": "cb56f42e-d82a-4ab0-abf6-9043aaa02cc3"}];
    var modeltype = "PlotContext";
    var elementid = "f163b8da-bd08-425e-9617-539d2133ad5b";
    var plotID = "9b3aa575-d6b6-4981-aa7e-68a99856e7c3";
    var dd = {};
    dd[plotID] = all_models;
    

    var secondPlot =                 function() {
        console.log("Bokeh.js loaded callback");
        embed_core = Bokeh.embed_core;
        console.log("embed_core loaded");
        embed_core.injectCss(staticRootUrl);
        Bokeh.HasProperties.prototype.sync = Backbone.sync
        embed_core.search_and_plot(dd);
        console.log("search_and_plot called", new Date());}

    function addEvent(el, eventName, func){
        if(el.attachEvent){
            return el.attachEvent('on' + eventName, func);}
        else {
            el.addEventListener(eventName, func, false);}}
    var script_injected = !(typeof(_embed_bokeh_inject_application) == "undefined") && _embed_bokeh_inject_application;
    //var script_injected = !(typeof(_embed_bokeh_inject_application) == "undefined");
    if(typeof Bokeh == "object"){
        // application.js is already loaded
        console.log("bokeh.js is already loaded, going straight to plotting");
        setTimeout(function () {
            embed_core = Bokeh.embed_core;
            console.log("calling embed_core.search_and_plot, from already loaded bokehjs state")
            embed_core.search_and_plot(dd);}, 20);}

    else if(!script_injected){
        // bokeh.js isn't loaded and it hasn't been scheduled to be injected
        var s = document.createElement('script');
        s.async = true; s.src = bokehJSUrl; s.id="bokeh_script_tag";
        
    }
    else {
        var s = document.getElementById("bokeh_script_tag");
    }
    var local_bokeh_embed_count = window.bokeh_embed_count;
    if(typeof(s) != "undefined") {
    addEvent(
        s,'load',
        function() {
            setTimeout(secondPlot, 20 * local_bokeh_embed_count);});
    }
    if(!script_injected){
        document.body.appendChild(s);
    }

    _embed_bokeh_inject_application = true;

    window._embed_bokeh = true;}(this));