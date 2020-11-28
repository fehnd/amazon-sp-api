const utils = require('../utils');

module.exports = {
  getFeeds:(req_params) => {
  	utils.checkParams(req_params, {
      query:{
        feedTypes:{
          type:'array',
          cond:{
            nexists:'nextToken'
          }
        },
        nextToken:{
          type:'string',
          cond:{
            nexists:'feedTypes'
          }
        }
      }
    });
    return Object.assign(req_params, {
      method:'GET',
      api_path:'/feeds/2020-09-04/feeds',
      restore_rate:45
    });
  },
  createFeed:(req_params) => {
    utils.checkParams(req_params, {
      body:{
        feedType:{
          type:'string'
        },
        marketplaceIds:{
          type:'array'
        },
        inputFeedDocumentId:{
          type:'string'
        }
      }
    });
    return Object.assign(req_params, {
      method:'POST',
      api_path:'/feeds/2020-09-04/feeds',
      restore_rate:120
    });
  },
  getFeed:(req_params) => {
    utils.checkParams(req_params, {
      path:{
        feedId:{
          type:'string'
        }
      }
    });
    return Object.assign(req_params, {
      method:'GET',
      api_path:'/feeds/2020-09-04/feeds/' + req_params.path.feedId,
      restore_rate:0.5
    });
  },
  cancelFeed:(req_params) => {
    utils.checkParams(req_params, {
      path:{
        feedId:{
          type:'string'
        }
      }
    });
    return Object.assign(req_params, {
      method:'DELETE',
      api_path:'/feeds/2020-09-04/feeds/' + req_params.path.feedId,
      restore_rate:45
    });
  },
  createFeedDocument:(req_params) => {
    utils.checkParams(req_params, {
      body:{
        contentType:{
          type:'string'
        }
      }
    });
    return Object.assign(req_params, {
      method:'POST',
      api_path:'/feeds/2020-09-04/documents',
      restore_rate:120
    });
  },
  getFeedDocument:(req_params) => {
    utils.checkParams(req_params, {
      path:{
        feedDocumentId:{
          type:'string'
        }
      }
    });
    return Object.assign(req_params, {
      method:'GET',
      api_path:'/feeds/2020-09-04/documents/' + req_params.path.feedDocumentId,
      restore_rate:45
    });
  }
};