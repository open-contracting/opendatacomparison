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

    var all_models = [{"attributes": {"doc": null, "id": "145b256e-c4e7-4299-b3b3-a93070c729de", "factors": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"]}, "type": "FactorRange", "id": "145b256e-c4e7-4299-b3b3-a93070c729de"}, {"attributes": {"doc": null, "id": "52922722-c33a-431d-993c-7f99bb51547a", "factors": ["EU - OpenTED - OpenTED - Contract Awards"]}, "type": "FactorRange", "id": "52922722-c33a-431d-993c-7f99bb51547a"}, {"attributes": {"doc": null, "id": "5e1cc7d9-46e2-42ab-bc03-af087d637f81"}, "type": "CategoricalTickFormatter", "id": "5e1cc7d9-46e2-42ab-bc03-af087d637f81"}, {"attributes": {"doc": null, "id": "d1dd6827-06d3-4ef8-849f-469a9d2d1907"}, "type": "CategoricalTicker", "id": "d1dd6827-06d3-4ef8-849f-469a9d2d1907"}, {"attributes": {"plot": {"type": "Plot", "id": "7e1bff99-b9b1-421b-a1ed-37eb424c20e6"}, "doc": null, "bounds": "auto", "id": "86d57327-bbd0-431a-8e02-7f498f5946d2", "location": "min", "major_label_orientation": 0.7853981633974483, "formatter": {"type": "CategoricalTickFormatter", "id": "5e1cc7d9-46e2-42ab-bc03-af087d637f81"}, "ticker": {"type": "CategoricalTicker", "id": "d1dd6827-06d3-4ef8-849f-469a9d2d1907"}, "dimension": 0}, "type": "CategoricalAxis", "id": "86d57327-bbd0-431a-8e02-7f498f5946d2"}, {"attributes": {"plot": {"type": "Plot", "id": "7e1bff99-b9b1-421b-a1ed-37eb424c20e6"}, "grid_line_color": null, "doc": null, "dimension": 0, "id": "a4deae0e-abdb-4dc0-be65-1920055a90f1", "axis": {"type": "CategoricalAxis", "id": "86d57327-bbd0-431a-8e02-7f498f5946d2"}}, "type": "Grid", "id": "a4deae0e-abdb-4dc0-be65-1920055a90f1"}, {"attributes": {"doc": null, "id": "3649ed74-1849-4fac-8fac-c3254d6f0074"}, "type": "CategoricalTickFormatter", "id": "3649ed74-1849-4fac-8fac-c3254d6f0074"}, {"attributes": {"doc": null, "id": "de3eaa86-68e6-4cc0-9c53-9f047273682e"}, "type": "CategoricalTicker", "id": "de3eaa86-68e6-4cc0-9c53-9f047273682e"}, {"attributes": {"plot": {"type": "Plot", "id": "7e1bff99-b9b1-421b-a1ed-37eb424c20e6"}, "doc": null, "bounds": "auto", "id": "ae49abb9-e37d-4fd8-87d5-ebdb12fd7407", "location": "min", "formatter": {"type": "CategoricalTickFormatter", "id": "3649ed74-1849-4fac-8fac-c3254d6f0074"}, "ticker": {"type": "CategoricalTicker", "id": "de3eaa86-68e6-4cc0-9c53-9f047273682e"}, "dimension": 1}, "type": "CategoricalAxis", "id": "ae49abb9-e37d-4fd8-87d5-ebdb12fd7407"}, {"attributes": {"plot": {"type": "Plot", "id": "7e1bff99-b9b1-421b-a1ed-37eb424c20e6"}, "grid_line_color": null, "doc": null, "dimension": 1, "id": "1bc631e3-8c3b-4a14-a731-0e20abe91314", "axis": {"type": "CategoricalAxis", "id": "ae49abb9-e37d-4fd8-87d5-ebdb12fd7407"}}, "type": "Grid", "id": "1bc631e3-8c3b-4a14-a731-0e20abe91314"}, {"attributes": {"column_names": ["radii", "concept", "datamap", "fields_in_concept"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"radii": [95, 55, 35, 15, 30, 0, 10, 0, 25, 0, 0, 10, 15, 10, 0], "concept": ["ADD ON", "AMOUNT", "AWARD FEATURES", "AWARD TRACKING", "BUYER", "CONTRACT FEATURES", "CONTRACT TRACKING", "DOCUMENTS", "GOODS / SERVICES", "PERFORMANCE", "PLANNING", "SUPPLIER", "SYSTEM", "TENDER FEATURES", "TENDER TRACKING"], "datamap": ["EU - OpenTED - OpenTED - Contract Awards", "EU - OpenTED - OpenTED - Contract Awards", "EU - OpenTED - OpenTED - Contract Awards", "EU - OpenTED - OpenTED - Contract Awards", "EU - OpenTED - OpenTED - Contract Awards", "EU - OpenTED - OpenTED - Contract Awards", "EU - OpenTED - OpenTED - Contract Awards", "EU - OpenTED - OpenTED - Contract Awards", "EU - OpenTED - OpenTED - Contract Awards", "EU - OpenTED - OpenTED - Contract Awards", "EU - OpenTED - OpenTED - Contract Awards", "EU - OpenTED - OpenTED - Contract Awards", "EU - OpenTED - OpenTED - Contract Awards", "EU - OpenTED - OpenTED - Contract Awards", "EU - OpenTED - OpenTED - Contract Awards"], "fields_in_concept": ["awards_additional_info, awards_appeals_body, awards_appeals_info, awards_award_type, awards_contract_value_initial_terms, awards_contract_value_initial_vat, awards_contract_value_terms, awards_contract_value_text, awards_contract_value_vat, awards_duration, awards_electronic, awards_eu_funds, awards_gpa_covered, awards_legal_basis, awards_lot_nr_title, awards_object, awards_scope, awards_total_value_vat, year", "awards_contract_value, awards_contract_value_currency, awards_contract_value_highest, awards_contract_value_initial, awards_contract_value_initial_currency, awards_contract_value_lowest, awards_total_value, awards_total_value_currency, awards_total_value_highest, awards_total_value_lowest, awards_total_value_text", "awards_award_date, awards_framework_dps, awards_involves, awards_likely_subcontracted, awards_notice_date, awards_num_offers, awards_score_chosen_tender", "awards_id, awards_reference, awards_uri", "awards_authority_addr, awards_authority_name, awards_authority_ref, awards_authority_type, awards_behalf_of, awards_type", "", "awards_contract_id, awards_contract_nr", "", "awards_cpv, awards_dac_code, awards_description, awards_services_covered, awards_title", "", "", "awards_tenderer_addr, awards_tenderer_name", "awards_language, awards_previous_notices, awards_publication_date", "awards_award_criteria, awards_procedure_type", ""]}, "id": "c3ca0d7b-3f70-47e6-9e63-e7543446a09a"}, "type": "ColumnDataSource", "id": "c3ca0d7b-3f70-47e6-9e63-e7543446a09a"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "c3ca0d7b-3f70-47e6-9e63-e7543446a09a"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "height": {"units": "data", "value": 1}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "line_alpha": {"units": "data", "value": 0.1}, "angle": {"units": "data", "field": "angle"}, "dilate": false, "radius_units": "screen", "width": {"units": "data", "value": 1}, "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "rect", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "white"}, "line_alpha": {"units": "data", "value": 1.0}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "white"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "height": {"units": "data", "value": 1}, "width": {"units": "data", "value": 1}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "rect"}, "id": "3c487f86-42ec-4d1e-b80c-0f05bd62c019"}, "type": "Glyph", "id": "3c487f86-42ec-4d1e-b80c-0f05bd62c019"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "c3ca0d7b-3f70-47e6-9e63-e7543446a09a"}, "server_data_source": null, "doc": null, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "angle_units": "deg", "fill_color": {"value": "#1f77b4"}, "visible": null, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": "radii"}, "line_alpha": {"units": "data", "value": 0.1}, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": {"units": "data", "field": "line_width"}, "type": "circle", "fill_alpha": {"units": "data", "value": 0.1}, "halign": null, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "margin": null}, "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": "black"}, "line_alpha": {"units": "data", "value": 1.0}, "fill_color": {"value": "black"}, "line_width": {"units": "data", "field": "line_width"}, "fill_alpha": {"units": "data", "value": 1.0}, "y": {"units": "data", "field": "datamap"}, "x": {"units": "data", "field": "concept"}, "type": "circle", "size": {"units": "screen", "default": 4, "field": "radii"}}, "id": "a2736cb6-25a3-4ee8-ad36-03b712f4a4a5"}, "type": "Glyph", "id": "a2736cb6-25a3-4ee8-ad36-03b712f4a4a5"}, {"attributes": {"plot": {"type": "Plot", "id": "7e1bff99-b9b1-421b-a1ed-37eb424c20e6"}, "id": "a4c088d7-9fd4-4e23-b411-2ab21c496939", "doc": null}, "type": "ResizeTool", "id": "a4c088d7-9fd4-4e23-b411-2ab21c496939"}, {"attributes": {"plot": {"type": "Plot", "id": "7e1bff99-b9b1-421b-a1ed-37eb424c20e6"}, "id": "61adb802-23dd-46ab-b1bd-1e9b17f1b01c", "doc": null}, "type": "PreviewSaveTool", "id": "61adb802-23dd-46ab-b1bd-1e9b17f1b01c"}, {"attributes": {"outer_height": 300, "x_range": {"type": "FactorRange", "id": "145b256e-c4e7-4299-b3b3-a93070c729de"}, "y_range": {"type": "FactorRange", "id": "52922722-c33a-431d-993c-7f99bb51547a"}, "outer_width": 1200, "renderers": [{"type": "CategoricalAxis", "id": "86d57327-bbd0-431a-8e02-7f498f5946d2"}, {"type": "Grid", "id": "a4deae0e-abdb-4dc0-be65-1920055a90f1"}, {"type": "CategoricalAxis", "id": "ae49abb9-e37d-4fd8-87d5-ebdb12fd7407"}, {"type": "Grid", "id": "1bc631e3-8c3b-4a14-a731-0e20abe91314"}, {"type": "Glyph", "id": "3c487f86-42ec-4d1e-b80c-0f05bd62c019"}, {"type": "Glyph", "id": "a2736cb6-25a3-4ee8-ad36-03b712f4a4a5"}], "height": 300, "width": 1200, "data_sources": [], "doc": null, "canvas_height": 300, "id": "7e1bff99-b9b1-421b-a1ed-37eb424c20e6", "title": null, "tools": [{"type": "HoverTool", "id": "d344e7f8-b838-4229-9b1c-3467e1bc5fc4"}, {"type": "ResizeTool", "id": "a4c088d7-9fd4-4e23-b411-2ab21c496939"}, {"type": "PreviewSaveTool", "id": "61adb802-23dd-46ab-b1bd-1e9b17f1b01c"}], "canvas_width": 1200}, "type": "Plot", "id": "7e1bff99-b9b1-421b-a1ed-37eb424c20e6"}, {"attributes": {"tooltips": {"Datamap": "@datamap", "Concept": "@concept", "Fields": "@fields_in_concept"}, "plot": {"type": "Plot", "id": "7e1bff99-b9b1-421b-a1ed-37eb424c20e6"}, "doc": null, "renderers": [], "id": "d344e7f8-b838-4229-9b1c-3467e1bc5fc4"}, "type": "HoverTool", "id": "d344e7f8-b838-4229-9b1c-3467e1bc5fc4"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "7e1bff99-b9b1-421b-a1ed-37eb424c20e6"}], "id": "deb23b28-59a7-4cce-a4b2-7368d5c0870c"}, "type": "PlotContext", "id": "deb23b28-59a7-4cce-a4b2-7368d5c0870c"}];
    var modeltype = "PlotContext";
    var elementid = "64a24282-7324-430f-ac41-c869d5c1a2c9";
    var plotID = "7e1bff99-b9b1-421b-a1ed-37eb424c20e6";
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