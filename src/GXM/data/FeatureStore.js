/**
 * Copyright (c) 2012 The Open Source Geospatial Foundation
 * 
 * Published under the BSD license. 
 * 
 * See http://svn.geoext.org/sandbox/gxm/geoext/gxm/license.txt for the full 
 * text of the license.
 */

/**
 * @requires GXM/data/models/Feature.js
 */

/** api: (define)
 *  module = GXM.data
 *  class = FeatureStore
 *  base_link = `Ext.data.Store <http://docs.sencha.com/touch/2-0/#!/api/Ext.data.Store>`_
 */

/** api: constructor
 *  .. class:: FeatureStore(config)
 *   
 *      The class that is used to construct a GXM FeatureStore.
 */
Ext.define('GXM.data.FeatureStore', {
    extend: 'Ext.data.Store',
    requires: [
        'GXM.version',
        'GXM.data.FeatureModel'
    ],
    xtype: 'gxm_featurestore',
    config: {
        
        /** api: config[model]
         * 
         *  ``String`` The identifier for the model to be used. 
         *  Defaults to ``gxm_layer``.
         */
        model: 'GXM.data.FeatureModel',
        
        /** api: config[proxy] 
         * 
         *  ``String/Ext.data.Proxy/Object`` The proxy to be used by the store.
         *  Defaults to a configuration object for a `Ext.data.MemoryProxy <http://docs.sencha.com/touch/2-0/#!/api/Ext.data.proxy.Memory>`_
         *  that has a :class:`Ext.data.reader.Json` set as `reader`-property.
         */
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: ''
            }
        }
    },
    
    /** api: method[getFeatureByIndex]
     *  :param idx: ``Integer`` The index of the record having the feature to return.
     *  :return:  ``OpenLayers.Feature`` The feature object the record at the given index contains.
     *  
     *  Returns the feature object of the record at the given index.
     */ 
    getFeatureByIndex: function(idx) {
        return this.getAt(idx).raw;
    }
});