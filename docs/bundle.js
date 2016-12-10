/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 155);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = Stream;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

function Stream (source) {
  this.source = source
}


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__function__ = __webpack_require__(51);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "j", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "k", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "l", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "m", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "n", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "o", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__function__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__function__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__function__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "p", function() { return __WEBPACK_IMPORTED_MODULE_1__function__["d"]; });
/** @license MIT License (c) copyright 2016 original author or authors */





/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Disposable__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SettableDisposable__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Promise__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__most_prelude__ = __webpack_require__(1);
/* harmony export (immutable) */ exports["f"] = tryDispose;
/* harmony export (immutable) */ exports["a"] = create;
/* harmony export (immutable) */ exports["b"] = empty;
/* harmony export (immutable) */ exports["d"] = all;
/* unused harmony export promised */
/* harmony export (immutable) */ exports["c"] = settable;
/* harmony export (immutable) */ exports["e"] = once;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */





var map = __WEBPACK_IMPORTED_MODULE_3__most_prelude__["a" /* map */]
var identity = __WEBPACK_IMPORTED_MODULE_3__most_prelude__["b" /* id */]

/**
 * Call disposable.dispose.  If it returns a promise, catch promise
 * error and forward it through the provided sink.
 * @param {number} t time
 * @param {{dispose: function}} disposable
 * @param {{error: function}} sink
 * @return {*} result of disposable.dispose
 */
function tryDispose (t, disposable, sink) {
  var result = disposeSafely(disposable)
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Promise__["a" /* isPromise */])(result)
    ? result.catch(function (e) {
      sink.error(t, e)
    })
    : result
}

/**
 * Create a new Disposable which will dispose its underlying resource
 * at most once.
 * @param {function} dispose function
 * @param {*?} data any data to be passed to disposer function
 * @return {Disposable}
 */
function create (dispose, data) {
  return once(new __WEBPACK_IMPORTED_MODULE_0__Disposable__["a" /* default */](dispose, data))
}

/**
 * Create a noop disposable. Can be used to satisfy a Disposable
 * requirement when no actual resource needs to be disposed.
 * @return {Disposable|exports|module.exports}
 */
function empty () {
  return new __WEBPACK_IMPORTED_MODULE_0__Disposable__["a" /* default */](identity, void 0)
}

/**
 * Create a disposable that will dispose all input disposables in parallel.
 * @param {Array<Disposable>} disposables
 * @return {Disposable}
 */
function all (disposables) {
  return create(disposeAll, disposables)
}

function disposeAll (disposables) {
  return Promise.all(map(disposeSafely, disposables))
}

function disposeSafely (disposable) {
  try {
    return disposable.dispose()
  } catch (e) {
    return Promise.reject(e)
  }
}

/**
 * Create a disposable from a promise for another disposable
 * @param {Promise<Disposable>} disposablePromise
 * @return {Disposable}
 */
function promised (disposablePromise) {
  return create(disposePromise, disposablePromise)
}

function disposePromise (disposablePromise) {
  return disposablePromise.then(disposeOne)
}

function disposeOne (disposable) {
  return disposable.dispose()
}

/**
 * Create a disposable proxy that allows its underlying disposable to
 * be set later.
 * @return {SettableDisposable}
 */
function settable () {
  return new __WEBPACK_IMPORTED_MODULE_1__SettableDisposable__["a" /* default */]()
}

/**
 * Wrap an existing disposable (which may not already have been once()d)
 * so that it will only dispose its underlying resource at most once.
 * @param {{ dispose: function() }} disposable
 * @return {Disposable} wrapped disposable
 */
function once (disposable) {
  return new __WEBPACK_IMPORTED_MODULE_0__Disposable__["a" /* default */](disposeMemoized, memoized(disposable))
}

function disposeMemoized (memoized) {
  if (!memoized.disposed) {
    memoized.disposed = true
    memoized.value = disposeSafely(memoized.disposable)
    memoized.disposable = void 0
  }

  return memoized.value
}

function memoized (disposable) {
  return { disposed: false, disposable: disposable, value: void 0 }
}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = Pipe;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

/**
 * A sink mixin that simply forwards event, end, and error to
 * another sink.
 * @param sink
 * @constructor
 */
function Pipe (sink) {
  this.sink = sink
}

Pipe.prototype.event = function (t, x) {
  return this.sink.event(t, x)
}

Pipe.prototype.end = function (t, x) {
  return this.sink.end(t, x)
}

Pipe.prototype.error = function (t, e) {
  return this.sink.error(t, e)
}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__most_prelude__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__source_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__source_from__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__source_periodic__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_symbol_observable__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__observable_subscribe__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__combinator_thru__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__source_fromEvent__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__combinator_observe__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__combinator_loop__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__combinator_accumulate__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__source_unfold__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__source_iterate__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__source_generate__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__combinator_build__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__combinator_transform__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__combinator_applicative__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__combinator_transduce__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__combinator_flatMap__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__combinator_continueWith__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__combinator_concatMap__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__combinator_mergeConcurrently__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__combinator_merge__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__combinator_combine__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__combinator_sample__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__combinator_zip__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__combinator_switch__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__combinator_filter__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__combinator_slice__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__combinator_timeslice__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__combinator_delay__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__combinator_timestamp__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__combinator_limit__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__combinator_promises__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__combinator_errors__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__most_multicast__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__scheduler_defaultScheduler__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__scheduler_PropagateTask__ = __webpack_require__(5);
/* unused harmony reexport fromEvent */
/* unused harmony reexport unfold */
/* unused harmony reexport iterate */
/* unused harmony reexport generate */
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */








/**
 * Core stream type
 * @type {Stream}
 */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__Stream__["a"]; });


// Add of and empty to constructor for fantasy-land compat
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].of = __WEBPACK_IMPORTED_MODULE_2__source_core__["a" /* of */]
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].empty = __WEBPACK_IMPORTED_MODULE_2__source_core__["b" /* empty */]
// Add from to constructor for ES Observable compat
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].from = __WEBPACK_IMPORTED_MODULE_3__source_from__["a" /* from */]
/* unused harmony reexport periodic */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__source_core__["c"]; });
/* unused harmony reexport from */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__source_core__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "j", function() { return __WEBPACK_IMPORTED_MODULE_2__source_core__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__source_core__["a"]; });


// -----------------------------------------------------------------------
// Draft ES Observable proposal interop
// https://github.com/zenparsing/es-observable



__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.subscribe = function (subscriber) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__observable_subscribe__["a" /* subscribe */])(subscriber, this)
}

__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype[__WEBPACK_IMPORTED_MODULE_5_symbol_observable__["a" /* default */]] = function () {
  return this
}

// -----------------------------------------------------------------------
// Fluent adapter



/**
 * Adapt a functional stream transform to fluent style.
 * It applies f to the this stream object
 * @param  {function(s: Stream): Stream} f function that
 * receives the stream itself and must return a new stream
 * @return {Stream}
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.thru = function (f) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__combinator_thru__["a" /* thru */])(f, this)
}

// -----------------------------------------------------------------------
// Adapting other sources

/**
 * Create a stream of events from the supplied EventTarget or EventEmitter
 * @param {String} event event name
 * @param {EventTarget|EventEmitter} source EventTarget or EventEmitter. The source
 *  must support either addEventListener/removeEventListener (w3c EventTarget:
 *  http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget),
 *  or addListener/removeListener (node EventEmitter: http://nodejs.org/api/events.html)
 * @returns {Stream} stream of events of the specified type from the source
 */


// -----------------------------------------------------------------------
// Observing



/* unused harmony reexport forEach */
/* unused harmony reexport drain */
/* unused harmony reexport observe */


/**
 * Process all the events in the stream
 * @returns {Promise} promise that fulfills when the stream ends, or rejects
 *  if the stream fails with an unhandled error.
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.observe = __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.forEach = function (f) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__combinator_observe__["a" /* observe */])(f, this)
}

/**
 * Consume all events in the stream, without providing a function to process each.
 * This causes a stream to become active and begin emitting events, and is useful
 * in cases where all processing has been setup upstream via other combinators, and
 * there is no need to process the terminal events.
 * @returns {Promise} promise that fulfills when the stream ends, or rejects
 *  if the stream fails with an unhandled error.
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.drain = function () {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__combinator_observe__["b" /* drain */])(this)
}

// -------------------------------------------------------



/* unused harmony reexport loop */


/**
 * Generalized feedback loop. Call a stepper function for each event. The stepper
 * will be called with 2 params: the current seed and the an event value.  It must
 * return a new { seed, value } pair. The `seed` will be fed back into the next
 * invocation of stepper, and the `value` will be propagated as the event value.
 * @param {function(seed:*, value:*):{seed:*, value:*}} stepper loop step function
 * @param {*} seed initial seed value passed to first stepper call
 * @returns {Stream} new stream whose values are the `value` field of the objects
 * returned by the stepper
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.loop = function (stepper, seed) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__combinator_loop__["a" /* loop */])(stepper, seed, this)
}

// -------------------------------------------------------



/* harmony reexport (binding) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_10__combinator_accumulate__["a"]; });
/* unused harmony reexport reduce */


/**
 * Create a stream containing successive reduce results of applying f to
 * the previous reduce result and the current stream item.
 * @param {function(result:*, x:*):*} f reducer function
 * @param {*} initial initial value
 * @returns {Stream} new stream containing successive reduce results
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.scan = function (f, initial) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__combinator_accumulate__["a" /* scan */])(f, initial, this)
}

/**
 * Reduce the stream to produce a single result.  Note that reducing an infinite
 * stream will return a Promise that never fulfills, but that may reject if an error
 * occurs.
 * @param {function(result:*, x:*):*} f reducer function
 * @param {*} initial optional initial value
 * @returns {Promise} promise for the file result of the reduce
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.reduce = function (f, initial) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__combinator_accumulate__["b" /* reduce */])(f, initial, this)
}

// -----------------------------------------------------------------------
// Building and extending






/* unused harmony reexport concat */
/* unused harmony reexport startWith */


/**
 * @param {Stream} tail
 * @returns {Stream} new stream containing all items in this followed by
 *  all items in tail
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.concat = function (tail) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__combinator_build__["a" /* concat */])(this, tail)
}

/**
 * @param {*} x value to prepend
 * @returns {Stream} a new stream with x prepended
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.startWith = function (x) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__combinator_build__["b" /* cons */])(x, this)
}

// -----------------------------------------------------------------------
// Transforming




/* harmony reexport (binding) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_12__combinator_transform__["b"]; });
/* unused harmony reexport ap */
/* unused harmony reexport tap */
/* unused harmony reexport constant */


/**
 * Transform each value in the stream by applying f to each
 * @param {function(*):*} f mapping function
 * @returns {Stream} stream containing items transformed by f
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.map = function (f) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__combinator_transform__["b" /* map */])(f, this)
}

/**
 * Assume this stream contains functions, and apply each function to each item
 * in the provided stream.  This generates, in effect, a cross product.
 * @param {Stream} xs stream of items to which
 * @returns {Stream} stream containing the cross product of items
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.ap = function (xs) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__combinator_applicative__["a" /* ap */])(this, xs)
}

/**
 * Replace each value in the stream with x
 * @param {*} x
 * @returns {Stream} stream containing items replaced with x
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.constant = function (x) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__combinator_transform__["c" /* constant */])(x, this)
}

/**
 * Perform a side effect for each item in the stream
 * @param {function(x:*):*} f side effect to execute for each item. The
 *  return value will be discarded.
 * @returns {Stream} new stream containing the same items as this stream
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.tap = function (f) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__combinator_transform__["a" /* tap */])(f, this)
}

// -----------------------------------------------------------------------
// Transducer support



/* unused harmony reexport transduce */


/**
 * Transform this stream by passing its events through a transducer.
 * @param  {function} transducer transducer function
 * @return {Stream} stream of events transformed by the transducer
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.transduce = function (transducer) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__combinator_transduce__["a" /* transduce */])(transducer, this)
}

// -----------------------------------------------------------------------
// FlatMapping



/* unused harmony reexport flatMap */
/* unused harmony reexport join */
/* unused harmony reexport chain */


/**
 * Map each value in the stream to a new stream, and merge it into the
 * returned outer stream. Event arrival times are preserved.
 * @param {function(x:*):Stream} f chaining function, must return a Stream
 * @returns {Stream} new stream containing all events from each stream returned by f
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.flatMap = __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.chain = function (f) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__combinator_flatMap__["a" /* flatMap */])(f, this)
}

/**
 * Monadic join. Flatten a Stream<Stream<X>> to Stream<X> by merging inner
 * streams to the outer. Event arrival times are preserved.
 * @returns {Stream<X>} new stream containing all events of all inner streams
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.join = function () {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__combinator_flatMap__["b" /* join */])(this)
}



/* unused harmony reexport continueWith */
/* unused harmony reexport flatMapEnd */


/**
 * Map the end event to a new stream, and begin emitting its values.
 * @param {function(x:*):Stream} f function that receives the end event value,
 * and *must* return a new Stream to continue with.
 * @returns {Stream} new stream that emits all events from the original stream,
 * followed by all events from the stream returned by f.
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.continueWith = __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.flatMapEnd = function (f) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__combinator_continueWith__["a" /* continueWith */])(f, this)
}



/* unused harmony reexport concatMap */


__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.concatMap = function (f) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_17__combinator_concatMap__["a" /* concatMap */])(f, this)
}

// -----------------------------------------------------------------------
// Concurrent merging



/* unused harmony reexport mergeConcurrently */


/**
 * Flatten a Stream<Stream<X>> to Stream<X> by merging inner
 * streams to the outer, limiting the number of inner streams that may
 * be active concurrently.
 * @param {number} concurrency at most this many inner streams will be
 *  allowed to be active concurrently.
 * @return {Stream<X>} new stream containing all events of all inner
 *  streams, with limited concurrency.
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.mergeConcurrently = function (concurrency) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__combinator_mergeConcurrently__["b" /* mergeConcurrently */])(concurrency, this)
}

// -----------------------------------------------------------------------
// Merging



/* unused harmony reexport mergeArray */
/* unused harmony reexport merge */


/**
 * Merge this stream and all the provided streams
 * @returns {Stream} stream containing items from this stream and s in time
 * order.  If two events are simultaneous they will be merged in
 * arbitrary order.
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.merge = function (/* ...streams*/) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__combinator_merge__["a" /* mergeArray */])(__WEBPACK_IMPORTED_MODULE_1__most_prelude__["k" /* cons */](this, arguments))
}

// -----------------------------------------------------------------------
// Combining



/* harmony reexport (binding) */ __webpack_require__.d(exports, "i", function() { return __WEBPACK_IMPORTED_MODULE_20__combinator_combine__["b"]; });
/* unused harmony reexport combine */


/**
 * Combine latest events from all input streams
 * @param {function(...events):*} f function to combine most recent events
 * @returns {Stream} stream containing the result of applying f to the most recent
 *  event of each input stream, whenever a new event arrives on any stream.
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.combine = function (f /*, ...streams*/) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__combinator_combine__["b" /* combineArray */])(f, __WEBPACK_IMPORTED_MODULE_1__most_prelude__["l" /* replace */](this, 0, arguments))
}

// -----------------------------------------------------------------------
// Sampling



/* unused harmony reexport sampleWith */
/* unused harmony reexport sampleArray */
/* unused harmony reexport sample */


/**
 * When an event arrives on sampler, emit the latest event value from stream.
 * @param {Stream} sampler stream of events at whose arrival time
 *  signal's latest value will be propagated
 * @returns {Stream} sampled stream of values
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.sampleWith = function (sampler) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_21__combinator_sample__["a" /* sampleWith */])(sampler, this)
}

/**
 * When an event arrives on this stream, emit the result of calling f with the latest
 * values of all streams being sampled
 * @param {function(...values):*} f function to apply to each set of sampled values
 * @returns {Stream} stream of sampled and transformed values
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.sample = function (f /* ...streams */) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_21__combinator_sample__["b" /* sampleArray */])(f, this, __WEBPACK_IMPORTED_MODULE_1__most_prelude__["g" /* tail */](arguments))
}

// -----------------------------------------------------------------------
// Zipping



/* unused harmony reexport zipArray */
/* unused harmony reexport zip */


/**
 * Pair-wise combine items with those in s. Given 2 streams:
 * [1,2,3] zipWith f [4,5,6] -> [f(1,4),f(2,5),f(3,6)]
 * Note: zip causes fast streams to buffer and wait for slow streams.
 * @param {function(a:Stream, b:Stream, ...):*} f function to combine items
 * @returns {Stream} new stream containing pairs
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.zip = function (f /*, ...streams*/) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__combinator_zip__["a" /* zipArray */])(f, __WEBPACK_IMPORTED_MODULE_1__most_prelude__["l" /* replace */](this, 0, arguments))
}

// -----------------------------------------------------------------------
// Switching



/* unused harmony reexport switchLatest */
/* unused harmony reexport switch */


/**
 * Given a stream of streams, return a new stream that adopts the behavior
 * of the most recent inner stream.
 * @returns {Stream} switching stream
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.switch = __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.switchLatest = function () {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_23__combinator_switch__["a" /* switchLatest */])(this)
}

// -----------------------------------------------------------------------
// Filtering



/* unused harmony reexport distinctBy */
/* unused harmony reexport skipRepeatsWith */
/* unused harmony reexport distinct */
/* unused harmony reexport skipRepeats */
/* unused harmony reexport filter */


/**
 * Retain only items matching a predicate
 * stream:                           -12345678-
 * filter(x => x % 2 === 0, stream): --2-4-6-8-
 * @param {function(x:*):boolean} p filtering predicate called for each item
 * @returns {Stream} stream containing only items for which predicate returns truthy
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.filter = function (p) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_24__combinator_filter__["a" /* filter */])(p, this)
}

/**
 * Skip repeated events, using === to compare items
 * stream:           -abbcd-
 * distinct(stream): -ab-cd-
 * @returns {Stream} stream with no repeated events
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.skipRepeats = function () {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_24__combinator_filter__["b" /* skipRepeats */])(this)
}

/**
 * Skip repeated events, using supplied equals function to compare items
 * @param {function(a:*, b:*):boolean} equals function to compare items
 * @returns {Stream} stream with no repeated events
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.skipRepeatsWith = function (equals) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_24__combinator_filter__["c" /* skipRepeatsWith */])(equals, this)
}

// -----------------------------------------------------------------------
// Slicing



/* unused harmony reexport slice */
/* unused harmony reexport skip */
/* unused harmony reexport take */
/* unused harmony reexport skipWhile */
/* unused harmony reexport takeWhile */


/**
 * stream:          -abcd-
 * take(2, stream): -ab|
 * @param {Number} n take up to this many events
 * @returns {Stream} stream containing at most the first n items from this stream
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.take = function (n) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_25__combinator_slice__["a" /* take */])(n, this)
}

/**
 * stream:          -abcd->
 * skip(2, stream): ---cd->
 * @param {Number} n skip this many events
 * @returns {Stream} stream not containing the first n events
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.skip = function (n) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_25__combinator_slice__["b" /* skip */])(n, this)
}

/**
 * Slice a stream by event index. Equivalent to, but more efficient than
 * stream.take(end).skip(start);
 * NOTE: Negative start and end are not supported
 * @param {Number} start skip all events before the start index
 * @param {Number} end allow all events from the start index to the end index
 * @returns {Stream} stream containing items where start <= index < end
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.slice = function (start, end) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_25__combinator_slice__["c" /* slice */])(start, end, this)
}

/**
 * stream:                        -123451234->
 * takeWhile(x => x < 5, stream): -1234|
 * @param {function(x:*):boolean} p predicate
 * @returns {Stream} stream containing items up to, but not including, the
 * first item for which p returns falsy.
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.takeWhile = function (p) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_25__combinator_slice__["d" /* takeWhile */])(p, this)
}

/**
 * stream:                        -123451234->
 * skipWhile(x => x < 5, stream): -----51234->
 * @param {function(x:*):boolean} p predicate
 * @returns {Stream} stream containing items following *and including* the
 * first item for which p returns falsy.
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.skipWhile = function (p) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_25__combinator_slice__["e" /* skipWhile */])(p, this)
}

// -----------------------------------------------------------------------
// Time slicing



/* unused harmony reexport until */
/* unused harmony reexport takeUntil */
/* unused harmony reexport since */
/* unused harmony reexport during */
/* unused harmony reexport skipUntil */


/**
 * stream:                    -a-b-c-d-e-f-g->
 * signal:                    -------x
 * takeUntil(signal, stream): -a-b-c-|
 * @param {Stream} signal retain only events in stream before the first
 * event in signal
 * @returns {Stream} new stream containing only events that occur before
 * the first event in signal.
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.until = __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.takeUntil = function (signal) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_26__combinator_timeslice__["a" /* takeUntil */])(signal, this)
}

/**
 * stream:                    -a-b-c-d-e-f-g->
 * signal:                    -------x
 * takeUntil(signal, stream): -------d-e-f-g->
 * @param {Stream} signal retain only events in stream at or after the first
 * event in signal
 * @returns {Stream} new stream containing only events that occur after
 * the first event in signal.
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.since = __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.skipUntil = function (signal) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_26__combinator_timeslice__["b" /* skipUntil */])(signal, this)
}

/**
 * stream:                    -a-b-c-d-e-f-g->
 * timeWindow:                -----s
 * s:                               -----t
 * stream.during(timeWindow): -----c-d-e-|
 * @param {Stream<Stream>} timeWindow a stream whose first event (s) represents
 *  the window start time.  That event (s) is itself a stream whose first event (t)
 *  represents the window end time
 * @returns {Stream} new stream containing only events within the provided timespan
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.during = function (timeWindow) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_26__combinator_timeslice__["c" /* during */])(timeWindow, this)
}

// -----------------------------------------------------------------------
// Delaying



/* unused harmony reexport delay */


/**
 * @param {Number} delayTime milliseconds to delay each item
 * @returns {Stream} new stream containing the same items, but delayed by ms
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.delay = function (delayTime) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_27__combinator_delay__["a" /* delay */])(delayTime, this)
}

// -----------------------------------------------------------------------
// Getting event timestamp


/* unused harmony reexport timestamp */


/**
 * Expose event timestamps into the stream. Turns a Stream<X> into
 * Stream<{time:t, value:X}>
 * @returns {Stream<{time:number, value:*}>}
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.timestamp = function () {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_28__combinator_timestamp__["a" /* timestamp */])(this)
}

// -----------------------------------------------------------------------
// Rate limiting



/* unused harmony reexport throttle */
/* unused harmony reexport debounce */


/**
 * Limit the rate of events
 * stream:              abcd----abcd----
 * throttle(2, stream): a-c-----a-c-----
 * @param {Number} period time to suppress events
 * @returns {Stream} new stream that skips events for throttle period
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.throttle = function (period) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_29__combinator_limit__["a" /* throttle */])(period, this)
}

/**
 * Wait for a burst of events to subside and emit only the last event in the burst
 * stream:              abcd----abcd----
 * debounce(2, stream): -----d-------d--
 * @param {Number} period events occuring more frequently than this
 *  on the provided scheduler will be suppressed
 * @returns {Stream} new debounced stream
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.debounce = function (period) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_29__combinator_limit__["b" /* debounce */])(period, this)
}

// -----------------------------------------------------------------------
// Awaiting Promises



/* unused harmony reexport fromPromise */
/* unused harmony reexport awaitPromises */
/* unused harmony reexport await */


/**
 * Await promises, turning a Stream<Promise<X>> into Stream<X>.  Preserves
 * event order, but timeshifts events based on promise resolution time.
 * @returns {Stream<X>} stream containing non-promise values
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.await = function () {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_30__combinator_promises__["a" /* awaitPromises */])(this)
}

// -----------------------------------------------------------------------
// Error handling



/* unused harmony reexport throwError */
/* unused harmony reexport recoverWith */
/* unused harmony reexport flatMapError */


/**
 * If this stream encounters an error, recover and continue with items from stream
 * returned by f.
 * stream:                  -a-b-c-X-
 * f(X):                           d-e-f-g-
 * flatMapError(f, stream): -a-b-c-d-e-f-g-
 * @param {function(error:*):Stream} f function which returns a new stream
 * @returns {Stream} new stream which will recover from an error by calling f
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.recoverWith = __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.flatMapError = function (f) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_31__combinator_errors__["a" /* flatMapError */])(f, this)
}

// -----------------------------------------------------------------------
// Multicasting



/* unused harmony reexport multicast */


/**
 * Transform the stream into multicast stream.  That means that many subscribers
 * to the stream will not cause multiple invocations of the internal machinery.
 * @returns {Stream} new stream which will multicast events to all observers.
 */
__WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */].prototype.multicast = function () {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_32__most_multicast__["a" /* default */])(this)
}

// export the instance of the defaultScheduler for third-party libraries


/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_33__scheduler_defaultScheduler__["a"]; });


// export an implementation of Task used internally for third-party libraries


/* harmony reexport (binding) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_34__scheduler_PropagateTask__["a"]; });



/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fatalError__ = __webpack_require__(16);
/* harmony export (immutable) */ exports["a"] = PropagateTask;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */



function PropagateTask (run, value, sink) {
  this._run = run
  this.value = value
  this.sink = sink
  this.active = true
}

PropagateTask.event = function (value, sink) {
  return new PropagateTask(emit, value, sink)
}

PropagateTask.end = function (value, sink) {
  return new PropagateTask(end, value, sink)
}

PropagateTask.error = function (value, sink) {
  return new PropagateTask(error, value, sink)
}

PropagateTask.prototype.dispose = function () {
  this.active = false
}

PropagateTask.prototype.run = function (t) {
  if (!this.active) {
    return
  }
  this._run(t, this.value, this.sink)
}

PropagateTask.prototype.error = function (t, e) {
  if (!this.active) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__fatalError__["a" /* default */])(e)
  }
  this.sink.error(t, e)
}

function error (t, e, sink) {
  sink.error(t, e)
}

function emit (t, x, sink) {
  sink.event(t, x)
}

function end (t, x, sink) {
  sink.end(t, x)
}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__disposable_dispose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scheduler_PropagateTask__ = __webpack_require__(5);
/* harmony export (immutable) */ exports["a"] = of;
/* harmony export (immutable) */ exports["b"] = empty;
/* harmony export (immutable) */ exports["c"] = never;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */





/**
 * Stream containing only x
 * @param {*} x
 * @returns {Stream}
 */
function of (x) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new Just(x))
}

function Just (x) {
  this.value = x
}

Just.prototype.run = function (sink, scheduler) {
  return scheduler.asap(new __WEBPACK_IMPORTED_MODULE_2__scheduler_PropagateTask__["a" /* default */](runJust, this.value, sink))
}

function runJust (t, x, sink) {
  sink.event(t, x)
  sink.end(t, void 0)
}

/**
 * Stream containing no events and ends immediately
 * @returns {Stream}
 */
function empty () {
  return EMPTY
}

function EmptySource () {}

EmptySource.prototype.run = function (sink, scheduler) {
  var task = __WEBPACK_IMPORTED_MODULE_2__scheduler_PropagateTask__["a" /* default */].end(void 0, sink)
  scheduler.asap(task)

  return __WEBPACK_IMPORTED_MODULE_1__disposable_dispose__["a" /* create */](disposeEmpty, task)
}

function disposeEmpty (task) {
  return task.dispose()
}

var EMPTY = new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new EmptySource())

/**
 * Stream containing no events and never ends
 * @returns {Stream}
 */
function never () {
  return NEVER
}

function NeverSource () {}

NeverSource.prototype.run = function () {
  return __WEBPACK_IMPORTED_MODULE_1__disposable_dispose__["b" /* empty */]()
}

var NEVER = new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new NeverSource())


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__interfaces__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sources__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subjects__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__combinators__ = __webpack_require__(82);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__interfaces__, "sync")) __webpack_require__.d(exports, "sync", function() { return __WEBPACK_IMPORTED_MODULE_0__interfaces__["sync"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__interfaces__, "next")) __webpack_require__.d(exports, "next", function() { return __WEBPACK_IMPORTED_MODULE_0__interfaces__["next"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__interfaces__, "error")) __webpack_require__.d(exports, "error", function() { return __WEBPACK_IMPORTED_MODULE_0__interfaces__["error"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__interfaces__, "complete")) __webpack_require__.d(exports, "complete", function() { return __WEBPACK_IMPORTED_MODULE_0__interfaces__["complete"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__interfaces__, "hold")) __webpack_require__.d(exports, "hold", function() { return __WEBPACK_IMPORTED_MODULE_0__interfaces__["hold"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__interfaces__, "HoldSubjectSource")) __webpack_require__.d(exports, "HoldSubjectSource", function() { return __WEBPACK_IMPORTED_MODULE_0__interfaces__["HoldSubjectSource"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "HoldSubjectSource", function() { return __WEBPACK_IMPORTED_MODULE_1__sources__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "sync", function() { return __WEBPACK_IMPORTED_MODULE_2__subjects__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "next", function() { return __WEBPACK_IMPORTED_MODULE_3__combinators__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "error", function() { return __WEBPACK_IMPORTED_MODULE_3__combinators__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "complete", function() { return __WEBPACK_IMPORTED_MODULE_3__combinators__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "hold", function() { return __WEBPACK_IMPORTED_MODULE_3__combinators__["d"]; });




//# sourceMappingURL=index.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MulticastSource__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return multicast; });


function multicast (stream) {
  const source = stream.source
  return source instanceof __WEBPACK_IMPORTED_MODULE_0__MulticastSource__["a" /* default */]
    ? stream
    : new stream.constructor(new __WEBPACK_IMPORTED_MODULE_0__MulticastSource__["a" /* default */](source))
}

/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__MulticastSource__["a"]; });



/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__virtual_dom__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_driver__ = __webpack_require__(57);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__virtual_dom__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__virtual_dom__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__virtual_dom__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__virtual_dom__["e"]; });
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__dom_driver__["a"]; });



//# sourceMappingURL=index.js.map

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MotorcycleVNode; });
var MotorcycleVNode = (function () {
    function MotorcycleVNode(tagName, className, id, data, children, text, elm, key) {
        this.tagName = tagName;
        this.className = className;
        this.id = id;
        this.data = data;
        this.children = children;
        this.text = text;
        this.elm = elm;
        this.key = key;
    }
    MotorcycleVNode.createTextVNode = function (text) {
        return new MotorcycleVNode(undefined, undefined, undefined, undefined, undefined, text, undefined, undefined);
    };
    return MotorcycleVNode;
}());

//# sourceMappingURL=MotorcycleVNode.js.map

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fusion_Map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sink_Pipe__ = __webpack_require__(3);
/* harmony export (immutable) */ exports["b"] = map;
/* harmony export (immutable) */ exports["c"] = constant;
/* harmony export (immutable) */ exports["a"] = tap;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */





/**
 * Transform each value in the stream by applying f to each
 * @param {function(*):*} f mapping function
 * @param {Stream} stream stream to map
 * @returns {Stream} stream containing items transformed by f
 */
function map (f, stream) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1__fusion_Map__["a" /* default */].create(f, stream.source))
}

/**
* Replace each value in the stream with x
* @param {*} x
* @param {Stream} stream
* @returns {Stream} stream containing items replaced with x
*/
function constant (x, stream) {
  return map(function () {
    return x
  }, stream)
}

/**
* Perform a side effect for each item in the stream
* @param {function(x:*):*} f side effect to execute for each item. The
*  return value will be discarded.
* @param {Stream} stream stream to tap
* @returns {Stream} new stream containing the same items as this stream
*/
function tap (f, stream) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new Tap(f, stream.source))
}

function Tap (f, source) {
  this.source = source
  this.f = f
}

Tap.prototype.run = function (sink, scheduler) {
  return this.source.run(new TapSink(this.f, sink), scheduler)
}

function TapSink (f, sink) {
  this.sink = sink
  this.f = f
}

TapSink.prototype.end = __WEBPACK_IMPORTED_MODULE_2__sink_Pipe__["a" /* default */].prototype.end
TapSink.prototype.error = __WEBPACK_IMPORTED_MODULE_2__sink_Pipe__["a" /* default */].prototype.error

TapSink.prototype.event = function (t, x) {
  var f = this.f
  f(x)
  this.sink.event(t, x)
}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_most__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return domEvent; });
/* unused harmony export blur */
/* unused harmony export focus */
/* unused harmony export focusin */
/* unused harmony export focusout */
/* unused harmony export click */
/* unused harmony export dblclick */
/* unused harmony export mousedown */
/* unused harmony export mouseup */
/* unused harmony export mousemove */
/* unused harmony export mouseover */
/* unused harmony export mouseenter */
/* unused harmony export mouseout */
/* unused harmony export mouseleave */
/* unused harmony export change */
/* unused harmony export select */
/* unused harmony export submit */
/* unused harmony export keydown */
/* unused harmony export touchcancel */
/* unused harmony export keyup */
/* unused harmony export input */
/* unused harmony export contextmenu */
/* unused harmony export resize */
/* unused harmony export scroll */
/* unused harmony export error */
/* unused harmony export hashchange */
/* unused harmony export popstate */
/* unused harmony export load */
/* unused harmony export unload */
/* unused harmony export pointerdown */
/* unused harmony export pointerup */
/* unused harmony export pointermove */
/* unused harmony export pointerover */
/* unused harmony export pointerenter */
/* unused harmony export pointerout */
/* unused harmony export pointerleave */
/* unused harmony export touchstart */
/* unused harmony export touchend */
/* unused harmony export touchmove */
/* unused harmony export keypress */


/** @license MIT License (c) copyright 2015-2016 original author or authors */
/** @author Brian Cavalier */
// domEvent :: (EventTarget t, Event e) => String -> t -> boolean=false -> Stream e
var domEvent = function (event, node, capture) {
    if ( capture === void 0 ) capture = false;

    return new __WEBPACK_IMPORTED_MODULE_0_most__["c" /* Stream */](new DomEvent(event, node, capture));
};

var blur = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('blur', node, capture);
};
var focus = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('focus', node, capture);
};
var focusin = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('focusin', node, capture);
};
var focusout = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('focusout', node, capture);
};
var click = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('click', node, capture);
};
var dblclick = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('dblclick', node, capture);
};
var mousedown = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('mousedown', node, capture);
};
var mouseup = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('mouseup', node, capture);
};
var mousemove = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('mousemove', node, capture);
};
var mouseover = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('mouseover', node, capture);
};
var mouseenter = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('mouseenter', node, capture);
};
var mouseout = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('mouseout', node, capture);
};
var mouseleave = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('mouseleave', node, capture);
};
var change = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('change', node, capture);
};
var select = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('select', node, capture);
};
var submit = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('submit', node, capture);
};
var keydown = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('keydown', node, capture);
};
var keypress = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('keypress', node, capture);
};
var keyup = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('keyup', node, capture);
};
var input = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('input', node, capture);
};
var contextmenu = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('contextmenu', node, capture);
};
var resize = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('resize', node, capture);
};
var scroll = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('scroll', node, capture);
};
var error = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('error', node, capture);
};

var hashchange = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('hashchange', node, capture);
};
var popstate = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('popstate', node, capture);
};
var load = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('load', node, capture);
};
var unload = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('unload', node, capture);
};

var pointerdown = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('pointerdown', node, capture);
};
var pointerup = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('pointerup', node, capture);
};
var pointermove = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('pointermove', node, capture);
};
var pointerover = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('pointerover', node, capture);
};
var pointerenter = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('pointerenter', node, capture);
};
var pointerout = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('pointerout', node, capture);
};
var pointerleave = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('pointerleave', node, capture);
};

var touchstart = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('touchstart', node, capture);
};
var touchend = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('touchend', node, capture);
};
var touchmove = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('touchmove', node, capture);
};
var touchcancel = function (node, capture) {
  if ( capture === void 0 ) capture = false;

  return domEvent('touchcancel', node, capture);
};

var DomEvent = function DomEvent (event, node, capture) {
  this.event = event;
  this.node = node;
  this.capture = capture;
};

DomEvent.prototype.run = function run (sink, scheduler) {
    var this$1 = this;

  var send = function (e) { return tryEvent(scheduler.now(), e, sink); };
  var dispose = function () { return this$1.node.removeEventListener(this$1.event, send, this$1.capture); };

  this.node.addEventListener(this.event, send, this.capture);

  return { dispose: dispose }
};

function tryEvent (t, x, sink) {
  try {
    sink.event(t, x);
  } catch (e) {
    sink.error(t, e);
  }
}


//# sourceMappingURL=mostDomEvent.es.js.map


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SCOPE_PREFIX; });
var SCOPE_PREFIX = "$$MOTORCYCLEDOM$$-";
//# sourceMappingURL=common.js.map

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MotorcycleVNode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return h; });


function addNS(data, children, selector) {
    data.ns = "http://www.w3.org/2000/svg";
    if (selector !== "foreignObject" && typeof children !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__is__["a" /* default */].array(children)) {
        for (var i = 0; i < children.length; ++i) {
            addNS(children[i].data, children[i].children, children[i].tagName);
        }
    }
}
var h = function (selector, b, c) {
    var data = {};
    var children;
    var text;
    var i;
    if (arguments.length === 3) {
        data = b;
        if (__WEBPACK_IMPORTED_MODULE_1__is__["a" /* default */].array(c)) {
            children = c;
        }
        else if (__WEBPACK_IMPORTED_MODULE_1__is__["a" /* default */].primitive(c)) {
            text = String(c);
        }
    }
    else if (arguments.length === 2) {
        if (__WEBPACK_IMPORTED_MODULE_1__is__["a" /* default */].array(b)) {
            children = b;
        }
        else if (__WEBPACK_IMPORTED_MODULE_1__is__["a" /* default */].primitive(b)) {
            text = String(b);
        }
        else {
            data = b;
        }
    }
    if (__WEBPACK_IMPORTED_MODULE_1__is__["a" /* default */].array(children)) {
        children = children.filter(Boolean);
        for (i = 0; i < children.length; ++i) {
            if (__WEBPACK_IMPORTED_MODULE_1__is__["a" /* default */].primitive(children[i])) {
                children[i] = __WEBPACK_IMPORTED_MODULE_0__MotorcycleVNode__["a" /* MotorcycleVNode */].createTextVNode(String(children[i]));
            }
        }
    }
    var _a = parseSelector(selector), tagName = _a.tagName, id = _a.id, className = _a.className;
    if (tagName === 'svg')
        addNS(data, children, tagName);
    return new __WEBPACK_IMPORTED_MODULE_0__MotorcycleVNode__["a" /* MotorcycleVNode */](tagName, className, id, data || {}, children, text, undefined, data && data.key);
};
function parseSelector(sel) {
    // Parse selector
    var hashIdx = sel.indexOf('#');
    var dotIdx = sel.indexOf('.', hashIdx);
    var hash = hashIdx > 0 ? hashIdx : sel.length;
    var dot = dotIdx > 0 ? dotIdx : sel.length;
    var tagName = hashIdx !== -1 || dotIdx !== -1
        ? sel.slice(0, Math.min(hash, dot))
        : sel;
    var id = sel.slice(hash + 1, dot) || void 0;
    var className = dotIdx < sel.length && dotIdx > 0
        ? sel.slice(dot + 1).replace(/\./g, ' ')
        : void 0;
    return {
        tagName: tagName,
        id: id,
        className: className,
    };
}
//# sourceMappingURL=h.js.map

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__disposable_dispose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LinkedList__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__most_prelude__ = __webpack_require__(1);
/* harmony export (immutable) */ exports["b"] = mergeConcurrently;
/* harmony export (immutable) */ exports["a"] = mergeMapConcurrently;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */






function mergeConcurrently (concurrency, stream) {
  return mergeMapConcurrently(__WEBPACK_IMPORTED_MODULE_3__most_prelude__["b" /* id */], concurrency, stream)
}

function mergeMapConcurrently (f, concurrency, stream) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new MergeConcurrently(f, concurrency, stream.source))
}

function MergeConcurrently (f, concurrency, source) {
  this.f = f
  this.concurrency = concurrency
  this.source = source
}

MergeConcurrently.prototype.run = function (sink, scheduler) {
  return new Outer(this.f, this.concurrency, this.source, sink, scheduler)
}

function Outer (f, concurrency, source, sink, scheduler) {
  this.f = f
  this.concurrency = concurrency
  this.sink = sink
  this.scheduler = scheduler
  this.pending = []
  this.current = new __WEBPACK_IMPORTED_MODULE_2__LinkedList__["a" /* default */]()
  this.disposable = __WEBPACK_IMPORTED_MODULE_1__disposable_dispose__["e" /* once */](source.run(this, scheduler))
  this.active = true
}

Outer.prototype.event = function (t, x) {
  this._addInner(t, x)
}

Outer.prototype._addInner = function (t, x) {
  if (this.current.length < this.concurrency) {
    this._startInner(t, x)
  } else {
    this.pending.push(x)
  }
}

Outer.prototype._startInner = function (t, x) {
  try {
    this._initInner(t, x)
  } catch (e) {
    this.error(t, e)
  }
}

Outer.prototype._initInner = function (t, x) {
  var innerSink = new Inner(t, this, this.sink)
  innerSink.disposable = mapAndRun(this.f, x, innerSink, this.scheduler)
  this.current.add(innerSink)
}

function mapAndRun (f, x, sink, scheduler) {
  return f(x).source.run(sink, scheduler)
}

Outer.prototype.end = function (t, x) {
  this.active = false
  __WEBPACK_IMPORTED_MODULE_1__disposable_dispose__["f" /* tryDispose */](t, this.disposable, this.sink)
  this._checkEnd(t, x)
}

Outer.prototype.error = function (t, e) {
  this.active = false
  this.sink.error(t, e)
}

Outer.prototype.dispose = function () {
  this.active = false
  this.pending.length = 0
  return Promise.all([this.disposable.dispose(), this.current.dispose()])
}

Outer.prototype._endInner = function (t, x, inner) {
  this.current.remove(inner)
  __WEBPACK_IMPORTED_MODULE_1__disposable_dispose__["f" /* tryDispose */](t, inner, this)

  if (this.pending.length === 0) {
    this._checkEnd(t, x)
  } else {
    this._startInner(t, this.pending.shift())
  }
}

Outer.prototype._checkEnd = function (t, x) {
  if (!this.active && this.current.isEmpty()) {
    this.sink.end(t, x)
  }
}

function Inner (time, outer, sink) {
  this.prev = this.next = null
  this.time = time
  this.outer = outer
  this.sink = sink
  this.disposable = void 0
}

Inner.prototype.event = function (t, x) {
  this.sink.event(Math.max(t, this.time), x)
}

Inner.prototype.end = function (t, x) {
  this.outer._endInner(Math.max(t, this.time), x, this)
}

Inner.prototype.error = function (t, e) {
  this.outer.error(Math.max(t, this.time), e)
}

Inner.prototype.dispose = function () {
  return this.disposable.dispose()
}


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = fatalError;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

function fatalError (e) {
  setTimeout(function () {
    throw e
  }, 0)
}


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sink_Pipe__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Filter__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FilterMap__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__most_prelude__ = __webpack_require__(1);
/* harmony export (immutable) */ exports["a"] = Map;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */






function Map (f, source) {
  this.f = f
  this.source = source
}

/**
 * Create a mapped source, fusing adjacent map.map, filter.map,
 * and filter.map.map if possible
 * @param {function(*):*} f mapping function
 * @param {{run:function}} source source to map
 * @returns {Map|FilterMap} mapped source, possibly fused
 */
Map.create = function createMap (f, source) {
  if (source instanceof Map) {
    return new Map(__WEBPACK_IMPORTED_MODULE_3__most_prelude__["f" /* compose */](f, source.f), source.source)
  }

  if (source instanceof __WEBPACK_IMPORTED_MODULE_1__Filter__["a" /* default */]) {
    return new __WEBPACK_IMPORTED_MODULE_2__FilterMap__["a" /* default */](source.p, f, source.source)
  }

  return new Map(f, source)
}

Map.prototype.run = function (sink, scheduler) { // eslint-disable-line no-extend-native
  return this.source.run(new MapSink(this.f, sink), scheduler)
}

function MapSink (f, sink) {
  this.f = f
  this.sink = sink
}

MapSink.prototype.end = __WEBPACK_IMPORTED_MODULE_0__sink_Pipe__["a" /* default */].prototype.end
MapSink.prototype.error = __WEBPACK_IMPORTED_MODULE_0__sink_Pipe__["a" /* default */].prototype.error

MapSink.prototype.event = function (t, x) {
  var f = this.f
  this.sink.event(t, f(x))
}


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = invoke;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

function invoke (f, args) {
	/*eslint complexity: [2,7]*/
  switch (args.length) {
    case 0: return f()
    case 1: return f(args[0])
    case 2: return f(args[0], args[1])
    case 3: return f(args[0], args[1], args[2])
    case 4: return f(args[0], args[1], args[2], args[3])
    case 5: return f(args[0], args[1], args[2], args[3], args[4])
    default:
      return f.apply(void 0, args)
  }
}


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Scheduler__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ClockTimer__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Timeline__ = __webpack_require__(121);
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */





var defaultScheduler = new __WEBPACK_IMPORTED_MODULE_0__Scheduler__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_1__ClockTimer__["a" /* default */](), new __WEBPACK_IMPORTED_MODULE_2__Timeline__["a" /* default */]())

/* harmony default export */ exports["a"] = defaultScheduler;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Pipe__ = __webpack_require__(3);
/* harmony export (immutable) */ exports["a"] = IndexSink;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */



function IndexSink (i, sink) {
  this.sink = sink
  this.index = i
  this.active = true
  this.value = void 0
}

IndexSink.prototype.event = function (t, x) {
  if (!this.active) {
    return
  }
  this.value = x
  this.sink.event(t, this)
}

IndexSink.prototype.end = function (t, x) {
  if (!this.active) {
    return
  }
  this.active = false
  this.sink.end(t, { index: this.index, value: x })
}

IndexSink.prototype.error = __WEBPACK_IMPORTED_MODULE_0__Pipe__["a" /* default */].prototype.error


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = tryEvent;
/* harmony export (immutable) */ exports["b"] = tryEnd;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

function tryEvent (t, x, sink) {
  try {
    sink.event(t, x)
  } catch (e) {
    sink.error(t, e)
  }
}

function tryEnd (t, x, sink) {
  try {
    sink.end(t, x)
  } catch (e) {
    sink.error(t, e)
  }
}


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["b"] = defer;
/* harmony export (immutable) */ exports["a"] = runTask;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

function defer (task) {
  return Promise.resolve(task).then(runTask)
}

function runTask (task) {
  try {
    return task.run()
  } catch (e) {
    return task.error(e)
  }
}


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = shadeColor;
/* harmony export (immutable) */ exports["c"] = hover;
/* harmony export (immutable) */ exports["b"] = willChange;
function shadeColor(color, percent) {
    var R = parseInt(color.substring(1, 3), 16);
    var G = parseInt(color.substring(3, 5), 16);
    var B = parseInt(color.substring(5, 7), 16);
    R = parseInt(String(R * (100 + percent) / 100));
    G = parseInt(String(G * (100 + percent) / 100));
    B = parseInt(String(B * (100 + percent) / 100));
    R = (R < 255) ? R : 255;
    G = (G < 255) ? G : 255;
    B = (B < 255) ? B : 255;
    var RR = ((R.toString(16).length === 1) ? '0' + R.toString(16) : R.toString(16));
    var GG = ((G.toString(16).length === 1) ? '0' + G.toString(16) : G.toString(16));
    var BB = ((B.toString(16).length === 1) ? '0' + B.toString(16) : B.toString(16));
    return '#' + RR + GG + BB;
}
function hover(declarations) {
    return {
        $nest: {
            '&:hover': declarations,
        },
    };
}
;
function willChange(value) {
    return {
        willChange: value,
    };
}


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__most_dom_event__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EventDelegator__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shouldUseCapture__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MotorcycleDomSource__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__elementMap__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ElementDomSource; });






var ElementDomSource = (function () {
    function ElementDomSource(rootElement$, namespace, delegator, element) {
        if (delegator === void 0) { delegator = new __WEBPACK_IMPORTED_MODULE_1__EventDelegator__["a" /* EventDelegator */](); }
        this._rootElement$ = rootElement$;
        this._namespace = namespace;
        this._delegator = delegator;
        this._element = element;
    }
    ElementDomSource.prototype.namespace = function () {
        return this._namespace;
    };
    ElementDomSource.prototype.select = function (cssSelector) {
        var trimmedSelector = cssSelector.trim();
        if (__WEBPACK_IMPORTED_MODULE_4__elementMap__["a" /* elementMap */].has(trimmedSelector))
            return new ElementDomSource(this._rootElement$, this._namespace, this._delegator, __WEBPACK_IMPORTED_MODULE_4__elementMap__["a" /* elementMap */].get(trimmedSelector));
        var amendedNamespace = trimmedSelector === ":root"
            ? this._namespace
            : this._namespace.concat(trimmedSelector);
        return new __WEBPACK_IMPORTED_MODULE_3__MotorcycleDomSource__["a" /* MotorcycleDomSource */](this._rootElement$, amendedNamespace, this._delegator);
    };
    ElementDomSource.prototype.elements = function () {
        return this._rootElement$.constant([this._element]);
    };
    ElementDomSource.prototype.events = function (eventType, options) {
        if (options === void 0) { options = {}; }
        var useCapture = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__shouldUseCapture__["a" /* shouldUseCapture */])(eventType, options.useCapture || false);
        var event$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__most_dom_event__["a" /* domEvent */])(eventType, this._element, useCapture);
        return this._rootElement$
            .constant(event$)
            .switch()
            .multicast();
    };
    ElementDomSource.prototype.isolateSource = function (source, scope) {
        return source.select(__WEBPACK_IMPORTED_MODULE_5__common__["a" /* SCOPE_PREFIX */] + scope);
    };
    ElementDomSource.prototype.isolateSink = function (sink, scope) {
        return sink.tap(function (vNode) {
            if (!vNode.data)
                vNode.data = {};
            if (!vNode.data.isolate)
                vNode.data.isolate = __WEBPACK_IMPORTED_MODULE_5__common__["a" /* SCOPE_PREFIX */] + scope;
            if (!vNode.key)
                vNode.key = __WEBPACK_IMPORTED_MODULE_5__common__["a" /* SCOPE_PREFIX */] + scope;
        });
    };
    return ElementDomSource;
}());

//# sourceMappingURL=ElementDomSource.js.map

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EventDelegator; });
var EventDelegator = (function () {
    function EventDelegator() {
        this.eventMap = new Map();
    }
    EventDelegator.prototype.addEventListener = function (element, input) {
        var scope = input.scope, scopeMap = input.scopeMap, createEventStreamFromElement = input.createEventStreamFromElement;
        if (scopeMap.has(scope))
            return scopeMap.get(scope);
        var scopedEventStream = createEventStreamFromElement(element);
        scopeMap.set(scope, scopedEventStream);
        return scopedEventStream;
    };
    EventDelegator.prototype.findScopeMap = function (eventType) {
        var eventMap = this.eventMap;
        return eventMap.has(eventType)
            ? eventMap.get(eventType)
            : addScopeMap(eventMap, eventType);
    };
    return EventDelegator;
}());

function addScopeMap(eventMap, eventType) {
    var scopeMap = new Map();
    eventMap.set(eventType, scopeMap);
    return scopeMap;
}
//# sourceMappingURL=EventDelegator.js.map

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__most_prelude__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__most_dom_event__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EventDelegator__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shouldUseCapture__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ElementDomSource__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__elementMap__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__isInScope__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__namespaceParsers__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__createScopedEventStream__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MotorcycleDomSource; });










var SCOPE_SEPARATOR = "~";
var MotorcycleDomSource = (function () {
    function MotorcycleDomSource(rootElement$, namespace, delegator) {
        if (delegator === void 0) { delegator = new __WEBPACK_IMPORTED_MODULE_2__EventDelegator__["a" /* EventDelegator */](); }
        this._rootElement$ = rootElement$;
        this._namespace = namespace;
        this._delegator = delegator;
        this._scope = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__namespaceParsers__["a" /* generateScope */])(namespace);
        this._selector = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__namespaceParsers__["b" /* generateSelector */])(namespace);
    }
    MotorcycleDomSource.prototype.namespace = function () {
        return this._namespace;
    };
    MotorcycleDomSource.prototype.select = function (cssSelector) {
        var trimmedSelector = cssSelector.trim();
        if (trimmedSelector === ':root')
            return this;
        if (__WEBPACK_IMPORTED_MODULE_5__elementMap__["a" /* elementMap */].has(trimmedSelector))
            return new __WEBPACK_IMPORTED_MODULE_4__ElementDomSource__["a" /* ElementDomSource */](this._rootElement$, this._namespace, this._delegator, __WEBPACK_IMPORTED_MODULE_5__elementMap__["a" /* elementMap */].get(trimmedSelector));
        return new MotorcycleDomSource(this._rootElement$, this._namespace.concat(trimmedSelector), this._delegator);
    };
    MotorcycleDomSource.prototype.elements = function () {
        var namespace = this._namespace;
        if (namespace.length === 0)
            return this._rootElement$.map(Array);
        var selector = this._selector;
        var scope = this._scope;
        var matchElement = findMatchingElements(selector, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__isInScope__["a" /* isInScope */])(scope));
        return this._rootElement$.map(matchElement);
    };
    MotorcycleDomSource.prototype.events = function (eventType, options) {
        if (options === void 0) { options = {}; }
        var namespace = this._namespace;
        var useCapture = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__shouldUseCapture__["a" /* shouldUseCapture */])(eventType, options.useCapture || false);
        if (namespace.length === 0)
            return this._rootElement$
                .take(1)
                .map(function (element) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__most_dom_event__["a" /* domEvent */])(eventType, element, useCapture); })
                .switch()
                .multicast();
        var delegator = this._delegator;
        var eventListenerInput = this.createEventListenerInput(eventType, useCapture);
        return this._rootElement$
            .map(findMostSpecificElement(this._scope))
            .map(function (element) { return delegator.addEventListener(element, eventListenerInput); })
            .switch()
            .multicast();
    };
    MotorcycleDomSource.prototype.isolateSource = function (source, scope) {
        return source.select(__WEBPACK_IMPORTED_MODULE_6__common__["a" /* SCOPE_PREFIX */] + scope);
    };
    MotorcycleDomSource.prototype.isolateSink = function (sink, scope) {
        return sink.tap(function (vNode) {
            var prefixedScope = __WEBPACK_IMPORTED_MODULE_6__common__["a" /* SCOPE_PREFIX */] + scope;
            if (!vNode.data.isolate)
                vNode.data.isolate = prefixedScope;
            if (!vNode.key)
                vNode.key = prefixedScope;
        });
    };
    MotorcycleDomSource.prototype.createEventListenerInput = function (eventType, useCapture) {
        var scope = this._scope;
        var selector = this._selector;
        var delegator = this._delegator;
        var checkElementIsInScope = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__isInScope__["a" /* isInScope */])(scope);
        var scopeMap = delegator.findScopeMap(eventType);
        var createEventStreamFromElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__createScopedEventStream__["a" /* createScopedEventStream */])(selector, eventType, useCapture, checkElementIsInScope);
        var scopeWithUseCapture = scope + SCOPE_SEPARATOR + useCapture;
        return {
            scopeMap: scopeMap,
            createEventStreamFromElement: createEventStreamFromElement,
            scope: scopeWithUseCapture,
        };
    };
    return MotorcycleDomSource;
}());

function findMostSpecificElement(scope) {
    return function queryForElement(rootElement) {
        return rootElement.querySelector("[data-isolate='" + scope + "']") || rootElement;
    };
}
;
function findMatchingElements(selector, checkIsInScope) {
    return function (element) {
        var matchedNodes = element.querySelectorAll(selector);
        var matchedNodesArray = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__most_prelude__["i" /* copy */])(matchedNodes);
        if (element.matches(selector))
            matchedNodesArray.push(element);
        return matchedNodesArray.filter(checkIsInScope);
    };
}
//# sourceMappingURL=MotorcycleDomSource.js.map

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return elementMap; });
var noop = function () { return void 0; };
var always = function (x) { return function () { return x; }; };
var elementMap = new Map([
    ['document', documentElement()],
    ['body', bodyElement()],
    ['window', windowElement()],
]);
var fallback = {
    matches: always(true),
    addEventListener: noop,
    removeEventListener: noop,
};
function documentElement() {
    try {
        return document;
    }
    catch (e) {
        return fallback;
    }
}
function bodyElement() {
    try {
        return document && document.body;
    }
    catch (e) {
        return fallback;
    }
}
function windowElement() {
    try {
        return window;
    }
    catch (e) {
        return fallback;
    }
}
//# sourceMappingURL=elementMap.js.map

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = shouldUseCapture;
var eventTypesThatDontBubble = [
    "blur",
    "canplay",
    "canplaythrough",
    "change",
    "durationchange",
    "emptied",
    "ended",
    "focus",
    "load",
    "loadeddata",
    "loadedmetadata",
    "mouseenter",
    "mouseleave",
    "pause",
    "play",
    "playing",
    "ratechange",
    "reset",
    "scroll",
    "seeked",
    "seeking",
    "stalled",
    "submit",
    "suspend",
    "timeupdate",
    "unload",
    "volumechange",
    "waiting",
];
function shouldUseCapture(eventType, useCapture) {
    if (eventTypesThatDontBubble.indexOf(eventType) !== -1)
        return true;
    return typeof useCapture === 'boolean'
        ? useCapture
        : false;
}
//# sourceMappingURL=shouldUseCapture.js.map

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__attributes__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dataset__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hero__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__props__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__IsolateModule__ = __webpack_require__(61);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__attributes__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__class__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__dataset__["a"]; });
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__props__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__style__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__IsolateModule__["a"]; });







//# sourceMappingURL=index.js.map

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export createElement */
/* unused harmony export createElementNS */
/* unused harmony export createTextNode */
/* unused harmony export insertBefore */
/* unused harmony export removeChild */
/* unused harmony export appendChild */
/* unused harmony export parentNode */
/* unused harmony export nextSibling */
/* harmony export (immutable) */ exports["a"] = tagName;
/* unused harmony export setTextContent */
function createElement(tagName) {
    return document.createElement(tagName);
}
function createElementNS(namespaceURI, qualifiedName) {
    return document.createElementNS(namespaceURI, qualifiedName);
}
function createTextNode(text) {
    return document.createTextNode(text);
}
function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
}
function removeChild(node, child) {
    if (node === void 0) {
        return;
    }
    node.removeChild(child);
}
function appendChild(node, child) {
    node.appendChild(child);
}
function parentNode(node) {
    return node.parentElement;
}
function nextSibling(node) {
    return node.nextSibling;
}
function tagName(node) {
    return node.tagName;
}
function setTextContent(node, text) {
    node.textContent = text;
}
var HTMLDOMAPI = {
    createElement: createElement,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
};
/* harmony default export */ exports["b"] = HTMLDOMAPI;
//# sourceMappingURL=htmldomapi.js.map

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_h__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_hyperscript__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_svg__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__init__ = __webpack_require__(70);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__helpers_hyperscript__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__helpers_hyperscript__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__helpers_hyperscript__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__helpers_hyperscript__["d"]; });
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__init__["a"]; });




//# sourceMappingURL=index.js.map

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var is = {
    array: Array.isArray,
    primitive: function (x) {
        return typeof x === 'string' || typeof x === 'number';
    },
};
/* harmony default export */ exports["a"] = is;
//# sourceMappingURL=is.js.map

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__htmldomapi__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MotorcycleVNode__ = __webpack_require__(10);
/* harmony export (immutable) */ exports["b"] = isDef;
/* harmony export (immutable) */ exports["a"] = isUndef;
/* harmony export (immutable) */ exports["c"] = sameVNode;
/* harmony export (immutable) */ exports["d"] = createKeyToOldIdx;
/* harmony export (immutable) */ exports["e"] = emptyNodeAt;


function isDef(x) {
    return typeof x !== 'undefined';
}
function isUndef(x) {
    return typeof x === 'undefined';
}
function sameVNode(vNode1, vNode2) {
    return vNode1.key === vNode2.key && vNode1.tagName === vNode2.tagName;
}
function createKeyToOldIdx(children, beginIdx, endIdx) {
    var map = {};
    var key;
    for (var i = beginIdx; i <= endIdx; ++i) {
        key = children[i].key;
        if (isDef(key))
            map[key] = i;
    }
    return map;
}
function emptyNodeAt(elm) {
    return new __WEBPACK_IMPORTED_MODULE_1__MotorcycleVNode__["a" /* MotorcycleVNode */](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__htmldomapi__["a" /* tagName */])(elm).toLowerCase(), elm.className, elm.id, {}, elm.children ? Array.prototype.slice.call(elm.children).map(emptyNodeAt) : [], undefined, elm, undefined);
}
//# sourceMappingURL=util.js.map

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_most_subject__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_switch_path__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_switch_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_switch_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RouterSource; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var RouterSource = (function () {
    function RouterSource(_history$, _previousRoutes) {
        this._history$ = _history$;
        this._previousRoutes = _previousRoutes;
    }
    RouterSource.prototype.history = function () {
        return this._history$;
    };
    RouterSource.prototype.path = function (path) {
        var scopedNamespace = this._previousRoutes.concat(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* splitPath */])(path));
        var scopedHistory$ = this._history$.filter(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers__["b" /* isStrictlyInScope */])(scopedNamespace)).thru(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most_subject__["hold"])(1));
        return new RouterSource(scopedHistory$, scopedNamespace);
    };
    RouterSource.prototype.define = function (routes) {
        var previousRoutes = this._previousRoutes;
        var createHref = this.createHref.bind(this);
        return this._history$
            .map(function matchRoute(location) {
            var filteredPath = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers__["c" /* getFilteredPath */])(previousRoutes, location.path);
            return __assign({}, __WEBPACK_IMPORTED_MODULE_1_switch_path___default()(filteredPath, routes), { location: location, createHref: createHref });
        })
            .thru(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most_subject__["hold"])(1));
    };
    RouterSource.prototype.createHref = function (path) {
        var previousRoutes = this._previousRoutes;
        if (previousRoutes.length === 0)
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers__["d" /* pathJoin */])(['/', path]);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers__["d" /* pathJoin */])(['/'].concat(previousRoutes, [path]));
    };
    return RouterSource;
}());

//# sourceMappingURL=RouterSource.js.map

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Increment through IDs for FreeStyle, which can't generate hashed IDs.
 */
var instanceId = 0;
/**
 * The unique id is used to get a unique hash on styles (no merging).
 */
var uniqueId = 0;
/**
 * Tag styles with this string to get unique hash outputs.
 */
exports.IS_UNIQUE = '__DO_NOT_DEDUPE_STYLE__';
/**
 * CSS properties that are valid unit-less numbers.
 */
var CSS_NUMBER = {
    'animation-iteration-count': true,
    'box-flex': true,
    'box-flex-group': true,
    'column-count': true,
    'counter-increment': true,
    'counter-reset': true,
    'flex': true,
    'flex-grow': true,
    'flex-positive': true,
    'flex-shrink': true,
    'flex-negative': true,
    'font-weight': true,
    'line-clamp': true,
    'line-height': true,
    'opacity': true,
    'order': true,
    'orphans': true,
    'tab-size': true,
    'widows': true,
    'z-index': true,
    'zoom': true,
    // SVG properties.
    'fill-opacity': true,
    'stroke-dashoffset': true,
    'stroke-opacity': true,
    'stroke-width': true
};
// Add vendor prefixes to all unit-less properties.
for (var _i = 0, _a = ['-webkit-', '-ms-', '-moz-', '-o-']; _i < _a.length; _i++) {
    var prefix = _a[_i];
    for (var _b = 0, _c = Object.keys(CSS_NUMBER); _b < _c.length; _b++) {
        var property = _c[_b];
        CSS_NUMBER[prefix + property] = true;
    }
}
/**
 * Transform a JavaScript property into a CSS property.
 */
function hyphenate(propertyName) {
    return propertyName
        .replace(/([A-Z])/g, '-$1')
        .replace(/^ms-/, '-ms-') // Internet Explorer vendor prefix.
        .toLowerCase();
}
/**
 * Check if a property name should pop to the top level of CSS.
 */
function isAtRule(propertyName) {
    return propertyName.charAt(0) === '@';
}
/**
 * Check if a value is a nested style definition.
 */
function isNestedStyle(value) {
    return value != null && typeof value === 'object' && !Array.isArray(value);
}
/**
 * Generate a hash value from a string.
 */
function stringHash(str) {
    var value = 5381;
    var i = str.length;
    while (i) {
        value = (value * 33) ^ str.charCodeAt(--i);
    }
    return (value >>> 0).toString(36);
}
exports.stringHash = stringHash;
/**
 * Transform a style string to a CSS string.
 */
function styleToString(name, value) {
    if (typeof value === 'number' && value !== 0 && !CSS_NUMBER[name]) {
        value = value + "px";
    }
    return name + ":" + String(value).replace(/([\{\}\[\]])/g, '\\$1');
}
/**
 * Sort an array of tuples by first value.
 */
function sortTuples(value) {
    return value.sort(function (a, b) { return a[0] > b[0] ? 1 : -1; });
}
/**
 * Categorize user styles.
 */
function parseUserStyles(styles, hasNestedStyles) {
    var properties = [];
    var nestedStyles = [];
    var isUnique = false;
    // Sort keys before adding to styles.
    for (var _i = 0, _a = Object.keys(styles); _i < _a.length; _i++) {
        var key = _a[_i];
        var value = styles[key];
        if (key === exports.IS_UNIQUE) {
            isUnique = !!value;
        }
        else if (isNestedStyle(value)) {
            nestedStyles.push([key.trim(), value]);
        }
        else {
            properties.push([hyphenate(key.trim()), value]);
        }
    }
    return {
        properties: sortTuples(properties),
        nestedStyles: hasNestedStyles ? nestedStyles : sortTuples(nestedStyles),
        isUnique: isUnique
    };
}
/**
 * Stringify an array of property tuples.
 */
function stringifyProperties(properties) {
    var result = [];
    var _loop_1 = function (name_1, value) {
        if (value != null) {
            if (Array.isArray(value)) {
                result.push(value.filter(function (x) { return x != null; }).map(function (x) { return styleToString(name_1, x); }).join(';'));
            }
            else {
                result.push(styleToString(name_1, value));
            }
        }
    };
    for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
        var _a = properties_1[_i], name_1 = _a[0], value = _a[1];
        _loop_1(name_1, value);
    }
    return result.join(';');
}
/**
 * Interpolate CSS selectors.
 */
function interpolate(selector, parent) {
    if (selector.indexOf('&') > -1) {
        return selector.replace(/&/g, parent);
    }
    return parent + " " + selector;
}
/**
 * Register all styles, but collect for post-selector correction using the hash.
 */
function collectHashedStyles(container, userStyles, isStyle, displayName) {
    var styles = [];
    function stylize(cache, userStyles, selector) {
        var _a = parseUserStyles(userStyles, isStyle), properties = _a.properties, nestedStyles = _a.nestedStyles, isUnique = _a.isUnique;
        var styleString = stringifyProperties(properties);
        var pid = styleString;
        // Only create style instances when styles exists.
        if (styleString) {
            var style = new Style(styleString, cache.hash, isUnique ? "u" + (++uniqueId).toString(36) : undefined);
            cache.add(style);
            styles.push([cache, selector, style]);
        }
        for (var _i = 0, nestedStyles_1 = nestedStyles; _i < nestedStyles_1.length; _i++) {
            var _b = nestedStyles_1[_i], name_2 = _b[0], value = _b[1];
            pid += name_2;
            if (isAtRule(name_2)) {
                var rule = cache.add(new Rule(name_2, undefined, cache.hash));
                pid += stylize(rule, value, selector);
            }
            else {
                pid += stylize(cache, value, isStyle ? interpolate(name_2, selector) : name_2);
            }
        }
        return pid;
    }
    // Create a temporary cache to handle changes/mutations before re-assigning later.
    var cache = new Cache(container.hash);
    var pid = stylize(cache, userStyles, '&');
    var hash = "f" + cache.hash(pid);
    var id = displayName ? displayName + "_" + hash : hash;
    for (var _i = 0, styles_1 = styles; _i < styles_1.length; _i++) {
        var _a = styles_1[_i], cache_1 = _a[0], selector = _a[1], style = _a[2];
        var key = isStyle ? interpolate(selector, "." + id) : selector;
        cache_1.get(style).add(new Selector(key, style.hash, undefined, pid));
    }
    container.merge(cache);
    return { pid: pid, id: id };
}
/**
 * Recursively register styles on a container instance.
 */
function registerUserStyles(container, styles, displayName) {
    return collectHashedStyles(container, styles, true, displayName).id;
}
/**
 * Create user rule. Simplified collection of styles, since it doesn't need a unique id hash.
 */
function registerUserRule(container, selector, styles) {
    var _a = parseUserStyles(styles, false), properties = _a.properties, nestedStyles = _a.nestedStyles, isUnique = _a.isUnique;
    // Throw when using properties and nested styles together in rule.
    if (properties.length && nestedStyles.length) {
        throw new TypeError("Registering a CSS rule can not use properties with nested styles");
    }
    var styleString = stringifyProperties(properties);
    var rule = new Rule(selector, styleString, container.hash, isUnique ? "u" + (++uniqueId).toString(36) : undefined);
    for (var _i = 0, nestedStyles_2 = nestedStyles; _i < nestedStyles_2.length; _i++) {
        var _b = nestedStyles_2[_i], name_3 = _b[0], value = _b[1];
        registerUserRule(rule, name_3, value);
    }
    container.add(rule);
}
/**
 * Parse and register keyframes on the current instance.
 */
function registerUserHashedRule(container, prefix, styles, displayName) {
    var bucket = new Cache(container.hash);
    var _a = collectHashedStyles(bucket, styles, false, displayName), pid = _a.pid, id = _a.id;
    var atRule = new Rule(prefix + " " + id, undefined, container.hash, undefined, pid);
    atRule.merge(bucket);
    container.add(atRule);
    return id;
}
/**
 * Get the styles string for a container class.
 */
function getStyles(container) {
    return container.values().map(function (style) { return style.getStyles(); }).join('');
}
/**
 * Implement a cache/event emitter.
 */
var Cache = (function () {
    function Cache(hash) {
        this.hash = hash;
        this.changeId = 0;
        this._children = {};
        this._keys = [];
        this._counts = {};
    }
    Cache.prototype.values = function () {
        var _this = this;
        return this._keys.map(function (x) { return _this._children[x]; });
    };
    Cache.prototype.add = function (style) {
        var count = this._counts[style.id] || 0;
        var item = this._children[style.id] || style.clone();
        this._counts[style.id] = count + 1;
        if (count === 0) {
            this._keys.push(item.id);
            this._children[item.id] = item;
            this.changeId++;
        }
        else {
            // Check if contents are different.
            if (item.getIdentifier() !== style.getIdentifier()) {
                throw new TypeError("Hash collision: " + style.getStyles() + " === " + item.getStyles());
            }
            this._keys.splice(this._keys.indexOf(style.id), 1);
            this._keys.push(style.id);
            if (item instanceof Cache && style instanceof Cache) {
                var prevChangeId = item.changeId;
                item.merge(style);
                if (item.changeId !== prevChangeId) {
                    this.changeId++;
                }
            }
        }
        return item;
    };
    Cache.prototype.remove = function (style) {
        var count = this._counts[style.id];
        if (count > 0) {
            this._counts[style.id] = count - 1;
            var item = this._children[style.id];
            if (count === 1) {
                delete this._counts[style.id];
                delete this._children[style.id];
                this._keys.splice(this._keys.indexOf(style.id), 1);
                this.changeId++;
            }
            else if (item instanceof Cache && style instanceof Cache) {
                var prevChangeId = item.changeId;
                item.unmerge(style);
                if (item.changeId !== prevChangeId) {
                    this.changeId++;
                }
            }
        }
    };
    Cache.prototype.get = function (container) {
        return this._children[container.id];
    };
    Cache.prototype.merge = function (cache) {
        for (var _i = 0, _a = cache.values(); _i < _a.length; _i++) {
            var value = _a[_i];
            this.add(value);
        }
        return this;
    };
    Cache.prototype.unmerge = function (cache) {
        for (var _i = 0, _a = cache.values(); _i < _a.length; _i++) {
            var value = _a[_i];
            this.remove(value);
        }
        return this;
    };
    Cache.prototype.clone = function () {
        return new Cache(this.hash).merge(this);
    };
    return Cache;
}());
exports.Cache = Cache;
/**
 * Selector is a dumb class made to represent nested CSS selectors.
 */
var Selector = (function () {
    function Selector(selector, hash, id, pid) {
        if (id === void 0) { id = "s" + hash(selector); }
        if (pid === void 0) { pid = ''; }
        this.selector = selector;
        this.hash = hash;
        this.id = id;
        this.pid = pid;
    }
    Selector.prototype.getStyles = function () {
        return this.selector;
    };
    Selector.prototype.getIdentifier = function () {
        return this.pid + "." + this.selector;
    };
    Selector.prototype.clone = function () {
        return new Selector(this.selector, this.hash, this.id, this.pid);
    };
    return Selector;
}());
exports.Selector = Selector;
/**
 * The style container registers a style string with selectors.
 */
var Style = (function (_super) {
    __extends(Style, _super);
    function Style(style, hash, id) {
        if (id === void 0) { id = "c" + hash(style); }
        var _this = _super.call(this, hash) || this;
        _this.style = style;
        _this.hash = hash;
        _this.id = id;
        return _this;
    }
    Style.prototype.getStyles = function () {
        return this.values().map(function (x) { return x.selector; }).join(',') + "{" + this.style + "}";
    };
    Style.prototype.getIdentifier = function () {
        return this.style;
    };
    Style.prototype.clone = function () {
        return new Style(this.style, this.hash, this.id).merge(this);
    };
    return Style;
}(Cache));
exports.Style = Style;
/**
 * Implement rule logic for style output.
 */
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule(rule, style, hash, id, pid) {
        if (style === void 0) { style = ''; }
        if (id === void 0) { id = "a" + hash(rule + "." + style); }
        if (pid === void 0) { pid = ''; }
        var _this = _super.call(this, hash) || this;
        _this.rule = rule;
        _this.style = style;
        _this.hash = hash;
        _this.id = id;
        _this.pid = pid;
        return _this;
    }
    Rule.prototype.getStyles = function () {
        return this.rule + "{" + this.style + getStyles(this) + "}";
    };
    Rule.prototype.getIdentifier = function () {
        return this.pid + "." + this.rule + "." + this.style;
    };
    Rule.prototype.clone = function () {
        return new Rule(this.rule, this.style, this.hash, this.id, this.pid).merge(this);
    };
    return Rule;
}(Cache));
exports.Rule = Rule;
/**
 * The FreeStyle class implements the API for everything else.
 */
var FreeStyle = (function (_super) {
    __extends(FreeStyle, _super);
    function FreeStyle(hash, debug, id) {
        if (id === void 0) { id = "f" + (++instanceId).toString(36); }
        var _this = _super.call(this, hash) || this;
        _this.hash = hash;
        _this.debug = debug;
        _this.id = id;
        return _this;
    }
    FreeStyle.prototype.registerStyle = function (styles, displayName) {
        return registerUserStyles(this, styles, this.debug ? displayName : undefined);
    };
    FreeStyle.prototype.registerKeyframes = function (keyframes, displayName) {
        return registerUserHashedRule(this, '@keyframes', keyframes, this.debug ? displayName : undefined);
    };
    FreeStyle.prototype.registerRule = function (rule, styles) {
        return registerUserRule(this, rule, styles);
    };
    FreeStyle.prototype.getStyles = function () {
        return getStyles(this);
    };
    FreeStyle.prototype.getIdentifier = function () {
        return this.id;
    };
    FreeStyle.prototype.clone = function () {
        return new FreeStyle(this.hash, this.debug, this.id).merge(this);
    };
    return FreeStyle;
}(Cache));
exports.FreeStyle = FreeStyle;
/**
 * Exports a simple function to create a new instance.
 */
function create(hash, debug) {
    if (hash === void 0) { hash = stringHash; }
    if (debug === void 0) { debug = process.env.NODE_ENV !== 'production'; }
    return new FreeStyle(hash, debug);
}
exports.create = create;
//# sourceMappingURL=free-style.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(138)))

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HoldSubjectSource__ = __webpack_require__(85);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__HoldSubjectSource__["a"]; });

//# sourceMappingURL=index.js.map

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transform__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__source_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sink_Pipe__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sink_IndexSink__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__disposable_dispose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__most_prelude__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__invoke__ = __webpack_require__(18);
/* harmony export (immutable) */ exports["a"] = combine;
/* harmony export (immutable) */ exports["b"] = combineArray;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */










var map = __WEBPACK_IMPORTED_MODULE_6__most_prelude__["a" /* map */]
var tail = __WEBPACK_IMPORTED_MODULE_6__most_prelude__["g" /* tail */]

/**
 * Combine latest events from all input streams
 * @param {function(...events):*} f function to combine most recent events
 * @returns {Stream} stream containing the result of applying f to the most recent
 *  event of each input stream, whenever a new event arrives on any stream.
 */
function combine (f /*, ...streams */) {
  return combineArray(f, tail(arguments))
}

/**
* Combine latest events from all input streams
* @param {function(...events):*} f function to combine most recent events
* @param {[Stream]} streams most recent events
* @returns {Stream} stream containing the result of applying f to the most recent
*  event of each input stream, whenever a new event arrives on any stream.
*/
function combineArray (f, streams) {
  var l = streams.length
  return l === 0 ? __WEBPACK_IMPORTED_MODULE_2__source_core__["b" /* empty */]()
  : l === 1 ? __WEBPACK_IMPORTED_MODULE_1__transform__["b" /* map */](f, streams[0])
  : new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](combineSources(f, streams))
}

function combineSources (f, streams) {
  return new Combine(f, map(getSource, streams))
}

function getSource (stream) {
  return stream.source
}

function Combine (f, sources) {
  this.f = f
  this.sources = sources
}

Combine.prototype.run = function (sink, scheduler) {
  var l = this.sources.length
  var disposables = new Array(l)
  var sinks = new Array(l)

  var mergeSink = new CombineSink(disposables, sinks, sink, this.f)

  for (var indexSink, i = 0; i < l; ++i) {
    indexSink = sinks[i] = new __WEBPACK_IMPORTED_MODULE_4__sink_IndexSink__["a" /* default */](i, mergeSink)
    disposables[i] = this.sources[i].run(indexSink, scheduler)
  }

  return __WEBPACK_IMPORTED_MODULE_5__disposable_dispose__["d" /* all */](disposables)
}

function CombineSink (disposables, sinks, sink, f) {
  this.sink = sink
  this.disposables = disposables
  this.sinks = sinks
  this.f = f

  var l = sinks.length
  this.awaiting = l
  this.values = new Array(l)
  this.hasValue = new Array(l)
  for (var i = 0; i < l; ++i) {
    this.hasValue[i] = false
  }

  this.activeCount = sinks.length
}

CombineSink.prototype.error = __WEBPACK_IMPORTED_MODULE_3__sink_Pipe__["a" /* default */].prototype.error

CombineSink.prototype.event = function (t, indexedValue) {
  var i = indexedValue.index
  var awaiting = this._updateReady(i)

  this.values[i] = indexedValue.value
  if (awaiting === 0) {
    this.sink.event(t, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__invoke__["a" /* default */])(this.f, this.values))
  }
}

CombineSink.prototype._updateReady = function (index) {
  if (this.awaiting > 0) {
    if (!this.hasValue[index]) {
      this.hasValue[index] = true
      this.awaiting -= 1
    }
  }
  return this.awaiting
}

CombineSink.prototype.end = function (t, indexedValue) {
  __WEBPACK_IMPORTED_MODULE_5__disposable_dispose__["f" /* tryDispose */](t, this.disposables[indexedValue.index], this.sink)
  if (--this.activeCount === 0) {
    this.sink.end(t, indexedValue.value)
  }
}


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__disposable_dispose__ = __webpack_require__(2);
/* harmony export (immutable) */ exports["a"] = continueWith;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */





function continueWith (f, stream) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new ContinueWith(f, stream.source))
}

function ContinueWith (f, source) {
  this.f = f
  this.source = source
}

ContinueWith.prototype.run = function (sink, scheduler) {
  return new ContinueWithSink(this.f, this.source, sink, scheduler)
}

function ContinueWithSink (f, source, sink, scheduler) {
  this.f = f
  this.sink = sink
  this.scheduler = scheduler
  this.active = true
  this.disposable = __WEBPACK_IMPORTED_MODULE_2__disposable_dispose__["e" /* once */](source.run(this, scheduler))
}

ContinueWithSink.prototype.error = __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__["a" /* default */].prototype.error

ContinueWithSink.prototype.event = function (t, x) {
  if (!this.active) {
    return
  }
  this.sink.event(t, x)
}

ContinueWithSink.prototype.end = function (t, x) {
  if (!this.active) {
    return
  }

  __WEBPACK_IMPORTED_MODULE_2__disposable_dispose__["f" /* tryDispose */](t, this.disposable, this.sink)
  this._startNext(t, x, this.sink)
}

ContinueWithSink.prototype._startNext = function (t, x, sink) {
  try {
    this.disposable = this._continue(this.f, x, sink)
  } catch (e) {
    sink.error(t, e)
  }
}

ContinueWithSink.prototype._continue = function (f, x, sink) {
  return f(x).source.run(sink, this.scheduler)
}

ContinueWithSink.prototype.dispose = function () {
  this.active = false
  return this.disposable.dispose()
}


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mergeConcurrently__ = __webpack_require__(15);
/* harmony export (immutable) */ exports["a"] = flatMap;
/* harmony export (immutable) */ exports["b"] = join;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */



/**
 * Map each value in the stream to a new stream, and merge it into the
 * returned outer stream. Event arrival times are preserved.
 * @param {function(x:*):Stream} f chaining function, must return a Stream
 * @param {Stream} stream
 * @returns {Stream} new stream containing all events from each stream returned by f
 */
function flatMap (f, stream) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mergeConcurrently__["a" /* mergeMapConcurrently */])(f, Infinity, stream)
}

/**
 * Monadic join. Flatten a Stream<Stream<X>> to Stream<X> by merging inner
 * streams to the outer. Event arrival times are preserved.
 * @param {Stream<Stream<X>>} stream stream of streams
 * @returns {Stream<X>} new stream containing all events of all inner streams
 */
function join (stream) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mergeConcurrently__["b" /* mergeConcurrently */])(Infinity, stream)
}


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sink_Pipe__ = __webpack_require__(3);
/* harmony export (immutable) */ exports["a"] = Filter;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */



function Filter (p, source) {
  this.p = p
  this.source = source
}

/**
 * Create a filtered source, fusing adjacent filter.filter if possible
 * @param {function(x:*):boolean} p filtering predicate
 * @param {{run:function}} source source to filter
 * @returns {Filter} filtered source
 */
Filter.create = function createFilter (p, source) {
  if (source instanceof Filter) {
    return new Filter(and(source.p, p), source.source)
  }

  return new Filter(p, source)
}

Filter.prototype.run = function (sink, scheduler) {
  return this.source.run(new FilterSink(this.p, sink), scheduler)
}

function FilterSink (p, sink) {
  this.p = p
  this.sink = sink
}

FilterSink.prototype.end = __WEBPACK_IMPORTED_MODULE_0__sink_Pipe__["a" /* default */].prototype.end
FilterSink.prototype.error = __WEBPACK_IMPORTED_MODULE_0__sink_Pipe__["a" /* default */].prototype.error

FilterSink.prototype.event = function (t, x) {
  var p = this.p
  p(x) && this.sink.event(t, x)
}

function and (p, q) {
  return function (x) {
    return p(x) && q(x)
  }
}


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["b"] = isIterable;
/* harmony export (immutable) */ exports["a"] = getIterator;
/* unused harmony export makeIterable */
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

/*global Set, Symbol*/
var iteratorSymbol
// Firefox ships a partial implementation using the name @@iterator.
// https://bugzilla.mozilla.org/show_bug.cgi?id=907077#c14
if (typeof Set === 'function' && typeof new Set()['@@iterator'] === 'function') {
  iteratorSymbol = '@@iterator'
} else {
  iteratorSymbol = typeof Symbol === 'function' && Symbol.iterator ||
  '_es6shim_iterator_'
}

function isIterable (o) {
  return typeof o[iteratorSymbol] === 'function'
}

function getIterator (o) {
  return o[iteratorSymbol]()
}

function makeIterable (f, o) {
  o[iteratorSymbol] = f
  return o
}


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__disposable_dispose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduler_defaultScheduler__ = __webpack_require__(19);
/* harmony export (immutable) */ exports["a"] = withDefaultScheduler;
/* unused harmony export withScheduler */
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */




function withDefaultScheduler (source) {
  return withScheduler(source, __WEBPACK_IMPORTED_MODULE_1__scheduler_defaultScheduler__["a" /* default */])
}

function withScheduler (source, scheduler) {
  return new Promise(function (resolve, reject) {
    runSource(source, scheduler, resolve, reject)
  })
}

function runSource (source, scheduler, resolve, reject) {
  var disposable = __WEBPACK_IMPORTED_MODULE_0__disposable_dispose__["c" /* settable */]()
  var observer = new Drain(resolve, reject, disposable)

  disposable.setDisposable(source.run(observer, scheduler))
}

function Drain (end, error, disposable) {
  this._end = end
  this._error = error
  this._disposable = disposable
  this.active = true
}

Drain.prototype.event = function (t, x) {}

Drain.prototype.end = function (t, x) {
  if (!this.active) {
    return
  }
  this.active = false
  disposeThen(this._end, this._error, this._disposable, x)
}

Drain.prototype.error = function (t, e) {
  this.active = false
  disposeThen(this._error, this._error, this._disposable, e)
}

function disposeThen (end, error, disposable, x) {
  Promise.resolve(disposable.dispose()).then(function () {
    end(x)
  }, error)
}


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponyfill__ = __webpack_require__(141);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ponyfill__["a" /* default */])(root);
/* harmony default export */ exports["a"] = result;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(153), __webpack_require__(154)(module)))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return turqoise; });
/* unused harmony export greenSea */
/* unused harmony export emerald */
/* unused harmony export nephritis */
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return green; });
/* unused harmony export lightGreen */
/* unused harmony export lime */
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return river; });
/* unused harmony export belize */
/* unused harmony export asphalt */
/* unused harmony export midnightBlue */
/* harmony export (binding) */ __webpack_require__.d(exports, "g", function() { return blue; });
/* unused harmony export lightBlue */
/* unused harmony export cyan */
/* unused harmony export teal */
/* unused harmony export alizarin */
/* unused harmony export pomegranate */
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return red; });
/* unused harmony export carrot */
/* unused harmony export pumpkin */
/* unused harmony export dullOrange */
/* unused harmony export orange */
/* unused harmony export bloodOrange */
/* unused harmony export amber */
/* unused harmony export sunflower */
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return yellow; });
/* unused harmony export amethyst */
/* unused harmony export plum */
/* unused harmony export purple */
/* unused harmony export deepPurple */
/* unused harmony export pink */
/* unused harmony export indigo */
/* unused harmony export brown */
/* unused harmony export grey */
/* unused harmony export gunMetal */
/* unused harmony export asbestos */
/* unused harmony export concrete */
/* unused harmony export silver */
/* unused harmony export clouds */
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return paper; });
/* unused harmony export black */
//Greens
//Greens
var turqoise = "#1abc9c";
var greenSea = "#16a085";
var emerald = "#2ecc71";
var nephritis = "#27ae60";
var green = "#4caf50";
var lightGreen = "#8bc34a";
var lime = "#cddc39";
//Blues
var river = "#3498db";
var belize = "#2980b9";
var asphalt = "#34495e";
var midnightBlue = "#2c3e50";
var blue = "#2196f3";
var lightBlue = "#03a9f4";
var cyan = "#00bcd4";
var teal = "#009688";
//Reds
var alizarin = "#e74c3c";
var pomegranate = "#c0392b";
var red = "#f44336";
//Oranges
var carrot = "#e67e22";
var pumpkin = "#d35400";
var dullOrange = "#f39c12";
var orange = "#ff9800";
var bloodOrange = "#ff5722";
var amber = "#ffc107";
//Yellows
var sunflower = "#f1c40f";
var yellow = "#ffeb3b";
//Purples + Pinks
var amethyst = "#9b59b6";
var plum = "#8e44ad";
var purple = "#9c27b0";
var deepPurple = "#673ab7";
var pink = "#e91e63";
var indigo = "#3f51b5";
//Browns
var brown = "#795548";
//Greys
var grey = "#9e9e9e";
var gunMetal = "#607d8b";
var asbestos = "#7f8c8d";
var concrete = "#95a5a6";
var silver = "#bdc3c7";
//Whites
var clouds = "#dde4e6";
var paper = "#efefef";
//Blacks
var black = "#212121";


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__motorcycle_core__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__motorcycle_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__motorcycle_router__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(142);




var drivers = {
    dom: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__motorcycle_dom__["e" /* makeDomDriver */])(document.querySelector('#app')),
    router: __WEBPACK_IMPORTED_MODULE_2__motorcycle_router__["a" /* routerDriver */],
};
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__motorcycle_core__["a" /* run */])(__WEBPACK_IMPORTED_MODULE_3__App__["a" /* App */], drivers);


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
class MulticastDisposable {
  constructor (source, sink) {
    this.source = source
    this.sink = sink
    this.disposed = false
  }

  dispose () {
    if (this.disposed) {
      return
    }
    this.disposed = true
    const remaining = this.source.remove(this.sink)
    return remaining === 0 && this.source._dispose()
  }
}
/* harmony export (immutable) */ exports["a"] = MulticastDisposable;



/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MulticastDisposable__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tryEvent__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dispose__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__most_prelude__ = __webpack_require__(1);





class MulticastSource {
  constructor (source) {
    this.source = source
    this.sinks = []
    this._disposable = __WEBPACK_IMPORTED_MODULE_2__dispose__["a" /* emptyDisposable */]
  }

  run (sink, scheduler) {
    const n = this.add(sink)
    if (n === 1) {
      this._disposable = this.source.run(this, scheduler)
    }
    return new __WEBPACK_IMPORTED_MODULE_0__MulticastDisposable__["a" /* default */](this, sink)
  }

  _dispose () {
    const disposable = this._disposable
    this._disposable = __WEBPACK_IMPORTED_MODULE_2__dispose__["a" /* emptyDisposable */]
    return Promise.resolve(disposable).then(__WEBPACK_IMPORTED_MODULE_2__dispose__["b" /* dispose */])
  }

  add (sink) {
    this.sinks = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__most_prelude__["n" /* append */])(sink, this.sinks)
    return this.sinks.length
  }

  remove (sink) {
    const i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__most_prelude__["d" /* findIndex */])(sink, this.sinks)
    // istanbul ignore next
    if (i >= 0) {
      this.sinks = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__most_prelude__["o" /* remove */])(i, this.sinks)
    }

    return this.sinks.length
  }

  event (time, value) {
    const s = this.sinks
    if (s.length === 1) {
      return s[0].event(time, value)
    }
    for (let i = 0; i < s.length; ++i) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tryEvent__["a" /* tryEvent */])(time, value, s[i])
    }
  }

  end (time, value) {
    const s = this.sinks
    for (let i = 0; i < s.length; ++i) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tryEvent__["b" /* tryEnd */])(time, value, s[i])
    }
  }

  error (time, err) {
    const s = this.sinks
    for (let i = 0; i < s.length; ++i) {
      s[i].error(time, err)
    }
  }
}
/* harmony export (immutable) */ exports["a"] = MulticastSource;



/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
const dispose = disposable => disposable.dispose()
/* harmony export (immutable) */ exports["b"] = dispose;


const emptyDisposable = {
  dispose () {}
}
/* harmony export (immutable) */ exports["a"] = emptyDisposable;



/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = tryEvent;
/* harmony export (immutable) */ exports["b"] = tryEnd;
function tryEvent (t, x, sink) {
  try {
    sink.event(t, x)
  } catch (e) {
    sink.error(t, e)
  }
}

function tryEnd (t, x, sink) {
  try {
    sink.end(t, x)
  } catch (e) {
    sink.error(t, e)
  }
}


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["h"] = cons;
/* harmony export (immutable) */ exports["k"] = append;
/* harmony export (immutable) */ exports["j"] = drop;
/* harmony export (immutable) */ exports["e"] = tail;
/* harmony export (immutable) */ exports["f"] = copy;
/* harmony export (immutable) */ exports["a"] = map;
/* harmony export (immutable) */ exports["g"] = reduce;
/* harmony export (immutable) */ exports["i"] = replace;
/* harmony export (immutable) */ exports["l"] = remove;
/* harmony export (immutable) */ exports["d"] = removeAll;
/* harmony export (immutable) */ exports["c"] = findIndex;
/* harmony export (immutable) */ exports["b"] = isArrayLike;
/** @license MIT License (c) copyright 2010-2016 original author or authors */

// Non-mutating array operations

// cons :: a -> [a] -> [a]
// a with x prepended
function cons (x, a) {
  const l = a.length
  const b = new Array(l + 1)
  b[0] = x
  for (let i = 0; i < l; ++i) {
    b[i + 1] = a[i]
  }
  return b
}

// append :: a -> [a] -> [a]
// a with x appended
function append (x, a) {
  const l = a.length
  const b = new Array(l + 1)
  for (let i = 0; i < l; ++i) {
    b[i] = a[i]
  }

  b[l] = x
  return b
}

// drop :: Int -> [a] -> [a]
// drop first n elements
function drop (n, a) { // eslint-disable-line complexity
  if (n < 0) {
    throw new TypeError('n must be >= 0')
  }

  const l = a.length
  if (n === 0 || l === 0) {
    return a
  }

  if (n >= l) {
    return []
  }

  return unsafeDrop(n, a, l - n)
}

// unsafeDrop :: Int -> [a] -> Int -> [a]
// Internal helper for drop
function unsafeDrop (n, a, l) {
  const b = new Array(l)
  for (let i = 0; i < l; ++i) {
    b[i] = a[n + i]
  }
  return b
}

// tail :: [a] -> [a]
// drop head element
function tail (a) {
  return drop(1, a)
}

// copy :: [a] -> [a]
// duplicate a (shallow duplication)
function copy (a) {
  const l = a.length
  const b = new Array(l)
  for (let i = 0; i < l; ++i) {
    b[i] = a[i]
  }
  return b
}

// map :: (a -> b) -> [a] -> [b]
// transform each element with f
function map (f, a) {
  const l = a.length
  const b = new Array(l)
  for (let i = 0; i < l; ++i) {
    b[i] = f(a[i])
  }
  return b
}

// reduce :: (a -> b -> a) -> a -> [b] -> a
// accumulate via left-fold
function reduce (f, z, a) {
  let r = z
  for (let i = 0, l = a.length; i < l; ++i) {
    r = f(r, a[i], i)
  }
  return r
}

// replace :: a -> Int -> [a]
// replace element at index
function replace (x, i, a) { // eslint-disable-line complexity
  if (i < 0) {
    throw new TypeError('i must be >= 0')
  }

  const l = a.length
  const b = new Array(l)
  for (let j = 0; j < l; ++j) {
    b[j] = i === j ? x : a[j]
  }
  return b
}

// remove :: Int -> [a] -> [a]
// remove element at index
function remove (i, a) {  // eslint-disable-line complexity
  if (i < 0) {
    throw new TypeError('i must be >= 0')
  }

  const l = a.length
  if (l === 0 || i >= l) { // exit early if index beyond end of array
    return a
  }

  if (l === 1) { // exit early if index in bounds and length === 1
    return []
  }

  return unsafeRemove(i, a, l - 1)
}

// unsafeRemove :: Int -> [a] -> Int -> [a]
// Internal helper to remove element at index
function unsafeRemove (i, a, l) {
  const b = new Array(l)
  let j
  for (j = 0; j < i; ++j) {
    b[j] = a[j]
  }
  for (j = i; j < l; ++j) {
    b[j] = a[j + 1]
  }

  return b
}

// removeAll :: (a -> boolean) -> [a] -> [a]
// remove all elements matching a predicate
function removeAll (f, a) {
  const l = a.length
  const b = new Array(l)
  let j = 0
  for (let x, i = 0; i < l; ++i) {
    x = a[i]
    if (!f(x)) {
      b[j] = x
      ++j
    }
  }

  b.length = j
  return b
}

// findIndex :: a -> [a] -> Int
// find index of x in a, from the left
function findIndex (x, a) {
  for (let i = 0, l = a.length; i < l; ++i) {
    if (x === a[i]) {
      return i
    }
  }
  return -1
}

// isArrayLike :: * -> boolean
// Return true iff x is array-like
function isArrayLike (x) {
  return x != null && typeof x.length === 'number' && typeof x !== 'function'
}


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["d"] = curry2;
/* unused harmony export curry3 */
/** @license MIT License (c) copyright 2010-2016 original author or authors */

// id :: a -> a
const id = x => x
/* harmony export (immutable) */ exports["a"] = id;


// compose :: (b -> c) -> (a -> b) -> (a -> c)
const compose = (f, g) => x => f(g(x))
/* harmony export (immutable) */ exports["b"] = compose;


// apply :: (a -> b) -> a -> b
const apply = (f, x) => f(x)
/* harmony export (immutable) */ exports["c"] = apply;


// curry2 :: ((a, b) -> c) -> (a -> b -> c)
function curry2 (f) {
  function curried (a, b) {
    switch (arguments.length) {
      case 0: return curried
      case 1: return b => f(a, b)
      default: return f(a, b)
    }
  }
  return curried
}

// curry3 :: ((a, b, c) -> d) -> (a -> b -> c -> d)
function curry3 (f) {
  function curried (a, b, c) { // eslint-disable-line complexity
    switch (arguments.length) {
      case 0: return curried
      case 1: return curry2((b, c) => f(a, b, c))
      case 2: return c => f(a, b, c)
      default:return f(a, b, c)
    }
  }
  return curried
}


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_most_subject__ = __webpack_require__(7);
/* harmony export (immutable) */ exports["a"] = run;

function run(component, drivers) {
    const disposableSubject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most_subject__["sync"])();
    const sinkProxies = createSinkProxies(drivers);
    const sources = callDrivers(drivers, sinkProxies);
    const sinks = callComponent(component, sources, disposableSubject);
    const subscriptions = replicateSinks(sinks, sinkProxies);
    function dispose() {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most_subject__["next"])(void 0, disposableSubject);
        disposeSinkProxies(sinkProxies);
        disposeSources(sources);
        subscriptions.forEach(unsubscribe);
    }
    return { sinks, sources, dispose };
}
function createSinkProxies(drivers) {
    return Object.keys(drivers)
        .reduce(function setSinkProxies(sinkProxies, driverName) {
        return set(sinkProxies, driverName, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most_subject__["sync"])());
    }, {});
}
function callDrivers(drivers, sinkProxies) {
    return Object.keys(drivers)
        .reduce(function setSources(sources, driverName) {
        const source = drivers[driverName](get(sinkProxies, driverName));
        return source ? set(sources, driverName, source) : sources;
    }, {});
}
function callComponent(component, sources, disposableSubject) {
    const sinks = component(sources);
    return Object.keys(sinks)
        .reduce(function createDisposableSink(disposableSinks, sinkName) {
        const disposableSink = get(sinks, sinkName).until(disposableSubject);
        return set(disposableSinks, sinkName, disposableSink);
    }, {});
}
function replicateSinks(sinks, sinkProxies) {
    return Object.keys(sinks)
        .filter(sinkName => get(sinkProxies, sinkName))
        .map(function createSubscription(sinkName) {
        const sink = get(sinks, sinkName);
        const sinkProxy = get(sinkProxies, sinkName);
        return sink.subscribe(createSubscriber(sinkProxy, sinkName));
    });
}
function createSubscriber(subject, sinkName) {
    return {
        next(value) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most_subject__["next"])(value, subject);
        },
        error(err) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most_subject__["error"])(err, subject);
            logError(err, sinkName);
        },
        complete(value) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most_subject__["complete"])(value, subject);
        },
    };
}
function logError(err, driverName) {
    console.error(`${driverName} has failed for the following reason` +
        `${err.message}` +
        `${err.stack || err}`);
}
function disposeSinkProxies(sinkProxies) {
    Object.keys(sinkProxies)
        .forEach(function disposeSinkProxy(sinkProxyName) {
        get(sinkProxies, sinkProxyName).complete();
    });
}
function unsubscribe(subscription) {
    subscription.unsubscribe();
}
function disposeSources(sources) {
    Object.keys(sources)
        .forEach(function disposeSource(sourceName) {
        const source = get(sources, sourceName);
        return source.dispose && source.dispose();
    });
}
function get(object, key) {
    return object[key];
}
function set(object, key, value) {
    object[key] = value;
    return object;
}
//# sourceMappingURL=index.js.map

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__most_dom_event__ = __webpack_require__(12);
/* harmony export (immutable) */ exports["a"] = createScopedEventStream;

function createScopedEventStream(selector, eventType, useCapture, checkElementIsInScope) {
    return function (element) {
        var ensureEventMatches = ensureMatches(selector, element);
        var eventStream = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__most_dom_event__["a" /* domEvent */])(eventType, element, useCapture);
        return scopeEventStream(eventStream, checkElementIsInScope, ensureEventMatches);
    };
}
function scopeEventStream(eventStream, checkElementIsInScope, ensureEventMatches) {
    return eventStream
        .filter(function (ev) { return checkElementIsInScope(ev.target); })
        .filter(ensureEventMatches)
        .multicast();
}
function ensureMatches(selector, element) {
    return function eventTargetMatches(ev) {
        return isMatch(selector, ev.target, element);
    };
}
function isMatch(selector, target, rootElement) {
    return !selector ||
        target.matches(selector) ||
        rootElement.matches(selector);
}
//# sourceMappingURL=createScopedEventStream.js.map

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MotorcycleDomSource__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ElementDomSource__ = __webpack_require__(24);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__MotorcycleDomSource__["a"]; });
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = isInScope;
function isInScope(scope) {
    return function (element) {
        var isolate = element.getAttribute('data-isolate');
        if (scope)
            return isolate === scope;
        return !isolate;
    };
}
//# sourceMappingURL=isInScope.js.map

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(13);
/* harmony export (immutable) */ exports["b"] = generateSelector;
/* harmony export (immutable) */ exports["a"] = generateScope;

function generateSelector(namespace) {
    return namespace.filter(findSelector).join(' ');
}
function findSelector(selector) {
    return !selector.startsWith(__WEBPACK_IMPORTED_MODULE_0__common__["a" /* SCOPE_PREFIX */]);
}
function generateScope(namespace) {
    var scopes = namespace.filter(findScope);
    return scopes[scopes.length - 1];
}
function findScope(selector) {
    return selector.startsWith(__WEBPACK_IMPORTED_MODULE_0__common__["a" /* SCOPE_PREFIX */]);
}
//# sourceMappingURL=namespaceParsers.js.map

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__makeDomDriver__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mockDomSource__ = __webpack_require__(59);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__makeDomDriver__["a"]; });
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_most__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_most_subject__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vNodeWrapper__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DomSources__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__virtual_dom__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__virtual_dom_util__ = __webpack_require__(33);
/* harmony export (immutable) */ exports["a"] = makeDomDriver;







var defaultModules = [__WEBPACK_IMPORTED_MODULE_5__modules__["a" /* StyleModule */], __WEBPACK_IMPORTED_MODULE_5__modules__["b" /* ClassModule */], __WEBPACK_IMPORTED_MODULE_5__modules__["c" /* PropsModule */], __WEBPACK_IMPORTED_MODULE_5__modules__["d" /* AttrsModule */], __WEBPACK_IMPORTED_MODULE_5__modules__["e" /* DatasetModule */]];
function makeDomDriver(rootElement, options) {
    if (options === void 0) { options = { modules: defaultModules }; }
    var modules = options.modules || defaultModules;
    var patch = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__virtual_dom__["a" /* init */])(modules.concat(new __WEBPACK_IMPORTED_MODULE_5__modules__["f" /* IsolateModule */]()));
    var rootVNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__virtual_dom_util__["e" /* emptyNodeAt */])(rootElement);
    var wrapVNodeInRootElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__vNodeWrapper__["a" /* vNodeWrapper */])(rootElement);
    return function DomDriver(vNode$) {
        var rootVNode$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["e" /* scan */])(patch, rootVNode, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["f" /* map */])(wrapVNodeInRootElement, vNode$));
        var rootElement$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["f" /* map */])(vNodeToElement, rootVNode$).thru(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_most_subject__["hold"])(1));
        rootElement$.drain()
            .catch(function (err) { return console.error(err); })
            .then(function () { return console.log('Dom Driver has terminated'); });
        return new __WEBPACK_IMPORTED_MODULE_3__DomSources__["a" /* MotorcycleDomSource */](rootElement$, []);
    };
}
function vNodeToElement(vNode) {
    return vNode.elm;
}
//# sourceMappingURL=makeDomDriver.js.map

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_most__ = __webpack_require__(4);
/* unused harmony export MockedDomSource */
/* unused harmony export mockDomSource */

var SCOPE_PREFIX = '___';
var MockedDomSource = (function () {
    function MockedDomSource(_mockConfig) {
        this._mockConfig = _mockConfig;
        if (_mockConfig.elements) {
            this._elements = _mockConfig.elements;
        }
        else {
            this._elements = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["g" /* empty */])();
        }
    }
    MockedDomSource.prototype.namespace = function () {
        return [];
    };
    MockedDomSource.prototype.elements = function () {
        return this._elements;
    };
    MockedDomSource.prototype.events = function (eventType, options) {
        var mockConfig = void options ? this._mockConfig : this._mockConfig;
        var keys = Object.keys(mockConfig);
        var keysLen = keys.length;
        for (var i = 0; i < keysLen; i++) {
            var key = keys[i];
            if (key === eventType) {
                return mockConfig[key];
            }
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["g" /* empty */])();
    };
    MockedDomSource.prototype.select = function (selector) {
        var mockConfig = this._mockConfig;
        var keys = Object.keys(mockConfig);
        var keysLen = keys.length;
        for (var i = 0; i < keysLen; i++) {
            var key = keys[i];
            if (key === selector) {
                return new MockedDomSource(mockConfig[key]);
            }
        }
        return new MockedDomSource({});
    };
    MockedDomSource.prototype.isolateSource = function (source, scope) {
        return source.select('.' + SCOPE_PREFIX + scope);
    };
    MockedDomSource.prototype.isolateSink = function (sink, scope) {
        return sink.map(function (vnode) {
            if (vnode.className.indexOf(SCOPE_PREFIX + scope) !== -1) {
                return vnode;
            }
            else {
                vnode.className += "." + SCOPE_PREFIX + scope;
                return vnode;
            }
        });
    };
    return MockedDomSource;
}());

function mockDomSource(mockConfig) {
    return new MockedDomSource(mockConfig);
}
//# sourceMappingURL=mockDomSource.js.map

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__virtual_dom_MotorcycleVNode__ = __webpack_require__(10);
/* harmony export (immutable) */ exports["a"] = vNodeWrapper;

function vNodeWrapper(rootElement) {
    var rootElementTagName = rootElement.tagName, id = rootElement.id, className = rootElement.className;
    var tagName = rootElementTagName.toLowerCase();
    return function execute(vNode) {
        var _a = vNode.tagName, vNodeTagName = _a === void 0 ? '' : _a, _b = vNode.id, vNodeId = _b === void 0 ? '' : _b, _c = vNode.className, vNodeClassName = _c === void 0 ? '' : _c;
        var isVNodeAndRootElementIdentical = vNodeId === id &&
            vNodeTagName.toLowerCase() === tagName &&
            vNodeClassName === className;
        if (isVNodeAndRootElementIdentical)
            return vNode;
        return new __WEBPACK_IMPORTED_MODULE_0__virtual_dom_MotorcycleVNode__["a" /* MotorcycleVNode */](tagName, className, id, {}, [vNode], void 0, rootElement, void 0);
    };
}
//# sourceMappingURL=vNodeWrapper.js.map

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return IsolateModule; });
var IsolateModule = (function () {
    function IsolateModule() {
    }
    IsolateModule.prototype.create = function (_, vNode) {
        this.setAndRemoveScopes(vNode);
    };
    IsolateModule.prototype.update = function (_, vNode) {
        this.setAndRemoveScopes(vNode);
    };
    IsolateModule.prototype.setAndRemoveScopes = function (vNode) {
        var scope = scopeFromVNode(vNode);
        if (!scope)
            return;
        vNode.elm.setAttribute('data-isolate', scope);
        addScopeToChildren(vNode.elm.children, scope);
    };
    return IsolateModule;
}());

function addScopeToChildren(children, scope) {
    if (!children)
        return;
    var count = children.length;
    for (var i = 0; i < count; ++i) {
        var child = children[i];
        if (child.hasAttribute('data-isolate'))
            continue;
        child.setAttribute('data-isolate', scope);
        if (child.children)
            addScopeToChildren(child.children, scope);
    }
}
function scopeFromVNode(vNode) {
    return vNode.data && vNode.data.isolate || "";
}
//# sourceMappingURL=IsolateModule.js.map

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AttrsModule; });
var booleanAttrs = [
    'allowfullscreen', 'async', 'autofocus', 'autoplay', 'checked', 'compact', 'controls', 'declare',
    'default', 'defaultchecked', 'defaultmuted', 'defaultselected', 'defer', 'disabled', 'draggable',
    'enabled', 'formnovalidate', 'hidden', 'indeterminate', 'inert', 'ismap', 'itemscope', 'loop', 'multiple',
    'muted', 'nohref', 'noresize', 'noshade', 'novalidate', 'nowrap', 'open', 'pauseonexit', 'readonly',
    'required', 'reversed', 'scoped', 'seamless', 'selected', 'sortable', 'spellcheck', 'translate',
    'truespeed', 'typemustmatch', 'visible',
];
var booleanAttrsDict = {};
for (var i = 0, len = booleanAttrs.length; i < len; i++) {
    booleanAttrsDict[booleanAttrs[i]] = true;
}
function updateAttrs(oldVnode, vnode) {
    var key;
    var cur;
    var old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data && oldVnode.data.attrs || {};
    var attrs = vnode.data && vnode.data.attrs || {};
    // update modified attributes, add new attributes
    for (key in attrs) {
        cur = attrs[key];
        old = oldAttrs[key];
        if (old !== cur) {
            // TODO: add support to namespaced attributes (setAttributeNS)
            if (!cur && booleanAttrsDict[key]) {
                elm.removeAttribute(key);
            }
            else {
                elm.setAttribute(key, cur);
            }
        }
    }
    //remove removed attributes
    for (key in oldAttrs) {
        if (!(key in attrs)) {
            elm.removeAttribute(key);
        }
    }
}
var AttrsModule = {
    update: updateAttrs,
    create: updateAttrs,
};
//# sourceMappingURL=attributes.js.map

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ClassModule; });
function updateClass(oldVnode, vnode) {
    var cur;
    var name;
    var elm = vnode.elm;
    var oldClass = oldVnode.data && oldVnode.data.class || {};
    var klass = vnode.data && vnode.data.class || {};
    for (name in oldClass) {
        if (!klass[name]) {
            elm.classList.remove(name);
        }
    }
    for (name in klass) {
        cur = klass[name];
        if (cur !== oldClass[name]) {
            if (cur) {
                elm.classList.add(name);
            }
            else {
                elm.classList.remove(name);
            }
        }
    }
}
var ClassModule = {
    create: updateClass,
    update: updateClass,
};
//# sourceMappingURL=class.js.map

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DatasetModule; });
function updateDataset(oldVnode, vnode) {
    var elm = vnode.elm;
    var oldDataset = oldVnode.data && oldVnode.data.dataset || {};
    var dataset = vnode.data && vnode.data.dataset || {};
    var key;
    for (key in oldDataset) {
        if (!dataset[key]) {
            delete elm.dataset[key];
        }
    }
    for (key in dataset) {
        if (oldDataset[key] !== dataset[key]) {
            elm.dataset[key] = dataset[key];
        }
    }
}
var DatasetModule = {
    create: updateDataset,
    update: updateDataset,
};
//# sourceMappingURL=dataset.js.map

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export HeroModule */
var raf;
function setRequestAnimationFrame() {
    if (!requestAnimationFrame)
        raf = (typeof window !== 'undefined' && window.requestAnimationFrame) || setTimeout;
}
var nextFrame = function (fn) { raf(function () { raf(fn); }); };
function setNextFrame(obj, prop, val) {
    nextFrame(function () { obj[prop] = val; });
}
function getTextNodeRect(textNode) {
    var rect = null;
    if (document.createRange) {
        var range = document.createRange();
        range.selectNodeContents(textNode);
        if (range.getBoundingClientRect) {
            rect = range.getBoundingClientRect();
        }
    }
    return rect;
}
function calcTransformOrigin(isTextNode, textRect, boundingRect) {
    if (isTextNode) {
        if (textRect) {
            //calculate pixels to center of text from left edge of bounding box
            var relativeCenterX = textRect.left + textRect.width / 2 - boundingRect.left;
            var relativeCenterY = textRect.top + textRect.height / 2 - boundingRect.top;
            return relativeCenterX + 'px ' + relativeCenterY + 'px';
        }
    }
    return '0 0'; //top left
}
function getTextDx(oldTextRect, newTextRect) {
    if (oldTextRect && newTextRect) {
        return ((oldTextRect.left + oldTextRect.width / 2) - (newTextRect.left + newTextRect.width / 2));
    }
    return 0;
}
function getTextDy(oldTextRect, newTextRect) {
    if (oldTextRect && newTextRect) {
        return ((oldTextRect.top + oldTextRect.height / 2) - (newTextRect.top + newTextRect.height / 2));
    }
    return 0;
}
function isTextElement(elm) {
    return elm.childNodes.length === 1 && elm.childNodes[0].nodeType === 3;
}
var removed;
var created;
function pre() {
    setRequestAnimationFrame();
    removed = {};
    created = [];
}
function create(_, vnode) {
    var hero = vnode.data && vnode.data.hero;
    if (hero && hero.id) {
        created.push(hero.id);
        created.push(vnode);
    }
}
function destroy(vnode) {
    var hero = vnode.data && vnode.data.hero;
    if (hero && hero.id) {
        var elm = vnode.elm;
        vnode.isTextNode = isTextElement(elm); //is this a text node?
        vnode.boundingRect = elm.getBoundingClientRect(); //save the bounding rectangle to a new property on the vnode
        vnode.textRect = vnode.isTextNode ? getTextNodeRect(elm.childNodes[0]) : null; //save bounding rect of inner text node
        var computedStyle = window.getComputedStyle(elm); //get current styles (includes inherited properties)
        vnode.savedStyle = JSON.parse(JSON.stringify(computedStyle)); //save a copy of computed style values
        removed[hero.id] = vnode;
    }
}
function post() {
    var i;
    var id;
    var newElm;
    var oldVnode;
    var oldElm;
    var hRatio;
    var wRatio;
    var oldRect;
    var newRect;
    var dx;
    var dy;
    var origTransform;
    var origTransition;
    var newStyle;
    var oldStyle;
    var newComputedStyle;
    var isTextNode;
    var newTextRect;
    var oldTextRect;
    for (i = 0; i < created.length; i += 2) {
        id = created[i];
        newElm = created[i + 1].elm;
        oldVnode = removed[id];
        if (oldVnode) {
            isTextNode = oldVnode.isTextNode && isTextElement(newElm); //Are old & new both text?
            newStyle = newElm.style;
            newComputedStyle = window.getComputedStyle(newElm); //get full computed style for new element
            oldElm = oldVnode.elm;
            oldStyle = oldElm.style;
            //Overall element bounding boxes
            newRect = newElm.getBoundingClientRect();
            oldRect = oldVnode.boundingRect; //previously saved bounding rect
            //Text node bounding boxes & distances
            if (isTextNode) {
                newTextRect = getTextNodeRect(newElm.childNodes[0]);
                oldTextRect = oldVnode.textRect;
                dx = getTextDx(oldTextRect, newTextRect);
                dy = getTextDy(oldTextRect, newTextRect);
            }
            else {
                //Calculate distances between old & new positions
                dx = oldRect.left - newRect.left;
                dy = oldRect.top - newRect.top;
            }
            hRatio = newRect.height / (Math.max(oldRect.height, 1));
            wRatio = isTextNode ? hRatio : newRect.width / (Math.max(oldRect.width, 1)); //text scales based on hRatio
            // Animate new element
            origTransform = newStyle.transform;
            origTransition = newStyle.transition;
            if (newComputedStyle.display === 'inline')
                newStyle.display = 'inline-block'; //this does not appear to have any negative side effects
            newStyle.transition = origTransition + 'transform 0s';
            newStyle.transformOrigin = calcTransformOrigin(isTextNode, newTextRect, newRect);
            newStyle.opacity = '0';
            newStyle.transform = origTransform + 'translate(' + dx + 'px, ' + dy + 'px) ' +
                'scale(' + 1 / wRatio + ', ' + 1 / hRatio + ')';
            setNextFrame(newStyle, 'transition', origTransition);
            setNextFrame(newStyle, 'transform', origTransform);
            setNextFrame(newStyle, 'opacity', '1');
            // Animate old element
            for (var key in oldVnode.savedStyle) {
                if (typeof key === 'number' && parseInt(key) !== key) {
                    var ms = key.substring(0, 2) === 'ms';
                    var moz = key.substring(0, 3) === 'moz';
                    var webkit = key.substring(0, 6) === 'webkit';
                    if (!ms && !moz && !webkit)
                        oldStyle[key] = oldVnode.savedStyle[key];
                }
            }
            oldStyle.position = 'absolute';
            oldStyle.top = oldRect.top + 'px'; //start at existing position
            oldStyle.left = oldRect.left + 'px';
            oldStyle.width = oldRect.width + 'px'; //Needed for elements who were sized relative to their parents
            oldStyle.height = oldRect.height + 'px'; //Needed for elements who were sized relative to their parents
            oldStyle.margin = 0; //Margin on hero element leads to incorrect positioning
            oldStyle.transformOrigin = calcTransformOrigin(isTextNode, oldTextRect, oldRect);
            oldStyle.transform = '';
            oldStyle.opacity = '1';
            document.body.appendChild(oldElm);
            // scale must be on far right for translate to be correct
            setNextFrame(oldStyle, 'transform', 'translate(' + -dx + 'px, ' + -dy + 'px) scale(' + wRatio + ', ' + hRatio + ')');
            setNextFrame(oldStyle, 'opacity', '0');
            oldElm.addEventListener('transitionend', function (ev) {
                if (ev.propertyName === 'transform')
                    document.body.removeChild(ev.target);
            });
        }
    }
    removed = {};
    created = [];
}
var HeroModule = {
    pre: pre,
    create: create,
    destroy: destroy,
    post: post,
};
//# sourceMappingURL=hero.js.map

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PropsModule; });
function updateProps(oldVnode, vnode) {
    if (!oldVnode.data && !vnode.data)
        return;
    var key;
    var cur;
    var old;
    var elm = vnode.elm;
    var oldProps = oldVnode.data && oldVnode.data.props || {};
    var props = vnode.data && vnode.data.props || {};
    for (key in oldProps) {
        if (!props[key]) {
            delete elm[key];
        }
    }
    for (key in props) {
        cur = props[key];
        old = oldProps[key];
        if (old !== cur && (key !== 'value' || elm[key] !== cur)) {
            elm[key] = cur;
        }
    }
}
var PropsModule = {
    create: updateProps,
    update: updateProps,
};
//# sourceMappingURL=props.js.map

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StyleModule; });
var requestAnimationFrame;
function setRequestAnimationFrame() {
    if (!requestAnimationFrame)
        requestAnimationFrame =
            (typeof window !== 'undefined' && window.requestAnimationFrame) || setTimeout;
}
function nextFrame(fn) {
    requestAnimationFrame(function () {
        requestAnimationFrame(fn);
    });
}
;
function setValueOnNextFrame(obj, prop, value) {
    nextFrame(function () {
        obj[prop] = value;
    });
}
function updateStyle(formerVNode, vNode) {
    var styleValue;
    var key;
    var element = vNode.elm;
    var formerStyle = formerVNode.data.style;
    var style = vNode.data.style;
    if (!formerStyle && !style)
        return;
    formerStyle = formerStyle || {};
    style = style || {};
    var formerHasDelayedProperty = !!formerStyle.delayed;
    for (key in formerStyle)
        if (!style[key])
            element.style[key] = '';
    for (key in style) {
        styleValue = style[key];
        if (key === 'delayed') {
            for (key in style.delayed) {
                styleValue = style.delayed[key];
                if (!formerHasDelayedProperty || styleValue !== formerStyle.delayed[key])
                    setValueOnNextFrame(element.style, key, styleValue);
            }
        }
        else if (key !== 'remove' && styleValue !== formerStyle[key]) {
            element.style[key] = styleValue;
        }
    }
}
function applyDestroyStyle(vNode) {
    var key;
    var element = vNode.elm;
    var style = vNode.data.style;
    if (!style || !style.destroy)
        return;
    var destroy = style.destroy;
    for (key in destroy)
        element.style[key] = destroy[key];
}
function applyRemoveStyle(vNode, callback) {
    var style = vNode.data.style;
    if (!style || !style.remove) {
        callback();
        return;
    }
    var key;
    var element = vNode.elm;
    var index = 0;
    var computedStyle;
    var listenerCount = 0;
    var appliedStyles = [];
    for (key in style) {
        appliedStyles.push(key);
        element.style[key] = style[key];
    }
    computedStyle = getComputedStyle(element);
    var transitionProperties = computedStyle['transition-property'].split(', ');
    for (; index < transitionProperties.length; ++index)
        if (appliedStyles.indexOf(transitionProperties[index]) !== -1)
            listenerCount++;
    element.addEventListener('transitionend', function (event) {
        if (event.target === element)
            --listenerCount;
        if (listenerCount === 0)
            callback();
    });
}
var StyleModule = {
    pre: setRequestAnimationFrame,
    create: updateStyle,
    update: updateStyle,
    destroy: applyDestroyStyle,
    remove: applyRemoveStyle,
};
//# sourceMappingURL=style.js.map

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__h__ = __webpack_require__(14);
/* unused harmony export hh */
/* unused harmony export a */
/* unused harmony export abbr */
/* unused harmony export acronym */
/* unused harmony export address */
/* unused harmony export applet */
/* unused harmony export area */
/* unused harmony export article */
/* unused harmony export aside */
/* unused harmony export audio */
/* unused harmony export b */
/* unused harmony export base */
/* unused harmony export basefont */
/* unused harmony export bdi */
/* unused harmony export bdo */
/* unused harmony export bgsound */
/* unused harmony export big */
/* unused harmony export blink */
/* unused harmony export blockquote */
/* unused harmony export body */
/* unused harmony export br */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return button; });
/* unused harmony export canvas */
/* unused harmony export caption */
/* unused harmony export center */
/* unused harmony export cite */
/* unused harmony export code */
/* unused harmony export col */
/* unused harmony export colgroup */
/* unused harmony export command */
/* unused harmony export content */
/* unused harmony export data */
/* unused harmony export datalist */
/* unused harmony export dd */
/* unused harmony export del */
/* unused harmony export details */
/* unused harmony export dfn */
/* unused harmony export dialog */
/* unused harmony export dir */
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return div; });
/* unused harmony export dl */
/* unused harmony export dt */
/* unused harmony export element */
/* unused harmony export em */
/* unused harmony export embed */
/* unused harmony export fieldset */
/* unused harmony export figcaption */
/* unused harmony export figure */
/* unused harmony export font */
/* unused harmony export footer */
/* unused harmony export form */
/* unused harmony export frame */
/* unused harmony export frameset */
/* unused harmony export h1 */
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return h2; });
/* unused harmony export h3 */
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return h4; });
/* unused harmony export h5 */
/* unused harmony export h6 */
/* unused harmony export head */
/* unused harmony export header */
/* unused harmony export hgroup */
/* unused harmony export hr */
/* unused harmony export html */
/* unused harmony export input */
/* unused harmony export ins */
/* unused harmony export isindex */
/* unused harmony export kbd */
/* unused harmony export keygen */
/* unused harmony export label */
/* unused harmony export legend */
/* unused harmony export li */
/* unused harmony export link */
/* unused harmony export listing */
/* unused harmony export main */
/* unused harmony export map */
/* unused harmony export mark */
/* unused harmony export marquee */
/* unused harmony export math */
/* unused harmony export menu */
/* unused harmony export menuitem */
/* unused harmony export meta */
/* unused harmony export meter */
/* unused harmony export multicol */
/* unused harmony export nav */
/* unused harmony export nextid */
/* unused harmony export nobr */
/* unused harmony export noembed */
/* unused harmony export noframes */
/* unused harmony export noscript */
/* unused harmony export object */
/* unused harmony export ol */
/* unused harmony export optgroup */
/* unused harmony export option */
/* unused harmony export output */
/* unused harmony export p */
/* unused harmony export param */
/* unused harmony export picture */
/* unused harmony export plaintext */
/* unused harmony export pre */
/* unused harmony export progress */
/* unused harmony export q */
/* unused harmony export rb */
/* unused harmony export rbc */
/* unused harmony export rp */
/* unused harmony export rt */
/* unused harmony export rtc */
/* unused harmony export ruby */
/* unused harmony export s */
/* unused harmony export samp */
/* unused harmony export script */
/* unused harmony export section */
/* unused harmony export select */
/* unused harmony export shadow */
/* unused harmony export small */
/* unused harmony export source */
/* unused harmony export spacer */
/* unused harmony export span */
/* unused harmony export strike */
/* unused harmony export strong */
/* unused harmony export style */
/* unused harmony export sub */
/* unused harmony export summary */
/* unused harmony export sup */
/* unused harmony export table */
/* unused harmony export tbody */
/* unused harmony export td */
/* unused harmony export template */
/* unused harmony export textarea */
/* unused harmony export tfoot */
/* unused harmony export th */
/* unused harmony export tr */
/* unused harmony export track */
/* unused harmony export tt */
/* unused harmony export u */
/* unused harmony export ul */
/* unused harmony export video */
/* unused harmony export wbr */
/* unused harmony export xmp */

function hh(tagName) {
    return function () {
        var selector = arguments[0];
        var data = arguments[1];
        var children = arguments[2];
        if (isSelector(selector))
            if (Array.isArray(data))
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__h__["a" /* h */])(tagName + selector, {}, data);
            else if (typeof data === 'object')
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__h__["a" /* h */])(tagName + selector, data, children);
            else
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__h__["a" /* h */])(tagName + selector, data || {});
        if (Array.isArray(selector))
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__h__["a" /* h */])(tagName, {}, selector);
        else if (typeof selector === 'object')
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__h__["a" /* h */])(tagName, selector, data);
        else
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__h__["a" /* h */])(tagName, selector || {});
    };
}
;
function isValidString(param) {
    return typeof param === 'string' && param.length > 0;
}
function isSelector(param) {
    return isValidString(param) && (param[0] === '.' || param[0] === '#');
}
var a = hh('a');
var abbr = hh('abbr');
var acronym = hh('acronym');
var address = hh('address');
var applet = hh('applet');
var area = hh('area');
var article = hh('article');
var aside = hh('aside');
var audio = hh('audio');
var b = hh('b');
var base = hh('base');
var basefont = hh('basefont');
var bdi = hh('bdi');
var bdo = hh('bdo');
var bgsound = hh('bgsound');
var big = hh('big');
var blink = hh('blink');
var blockquote = hh('blockquote');
var body = hh('body');
var br = hh('br');
var button = hh('button');
var canvas = hh('canvas');
var caption = hh('caption');
var center = hh('center');
var cite = hh('cite');
var code = hh('code');
var col = hh('col');
var colgroup = hh('colgroup');
var command = hh('command');
var content = hh('content');
var data = hh('data');
var datalist = hh('datalist');
var dd = hh('dd');
var del = hh('del');
var details = hh('details');
var dfn = hh('dfn');
var dialog = hh('dialog');
var dir = hh('dir');
var div = hh('div');
var dl = hh('dl');
var dt = hh('dt');
var element = hh('element');
var em = hh('em');
var embed = hh('embed');
var fieldset = hh('fieldset');
var figcaption = hh('figcaption');
var figure = hh('figure');
var font = hh('font');
var footer = hh('footer');
var form = hh('form');
var frame = hh('frame');
var frameset = hh('frameset');
var h1 = hh('h1');
var h2 = hh('h2');
var h3 = hh('h3');
var h4 = hh('h4');
var h5 = hh('h5');
var h6 = hh('h6');
var head = hh('head');
var header = hh('header');
var hgroup = hh('hgroup');
var hr = hh('hr');
var html = hh('html');
var input = hh('input');
var ins = hh('ins');
var isindex = hh('isindex');
var kbd = hh('kbd');
var keygen = hh('keygen');
var label = hh('label');
var legend = hh('legend');
var li = hh('li');
var link = hh('link');
var listing = hh('listing');
var main = hh('main');
var map = hh('map');
var mark = hh('mark');
var marquee = hh('marquee');
var math = hh('math');
var menu = hh('menu');
var menuitem = hh('menuitem');
var meta = hh('meta');
var meter = hh('meter');
var multicol = hh('multicol');
var nav = hh('nav');
var nextid = hh('nextid');
var nobr = hh('nobr');
var noembed = hh('noembed');
var noframes = hh('noframes');
var noscript = hh('noscript');
var object = hh('object');
var ol = hh('ol');
var optgroup = hh('optgroup');
var option = hh('option');
var output = hh('output');
var p = hh('p');
var param = hh('param');
var picture = hh('picture');
var plaintext = hh('plaintext');
var pre = hh('pre');
var progress = hh('progress');
var q = hh('q');
var rb = hh('rb');
var rbc = hh('rbc');
var rp = hh('rp');
var rt = hh('rt');
var rtc = hh('rtc');
var ruby = hh('ruby');
var s = hh('s');
var samp = hh('samp');
var script = hh('script');
var section = hh('section');
var select = hh('select');
var shadow = hh('shadow');
var small = hh('small');
var source = hh('source');
var spacer = hh('spacer');
var span = hh('span');
var strike = hh('strike');
var strong = hh('strong');
var style = hh('style');
var sub = hh('sub');
var summary = hh('summary');
var sup = hh('sup');
var table = hh('table');
var tbody = hh('tbody');
var td = hh('td');
var template = hh('template');
var textarea = hh('textarea');
var tfoot = hh('tfoot');
var th = hh('th');
var tr = hh('tr');
var track = hh('track');
var tt = hh('tt');
var u = hh('u');
var ul = hh('ul');
var video = hh('video');
var wbr = hh('wbr');
var xmp = hh('xmp');
//# sourceMappingURL=hyperscript.js.map

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__h__ = __webpack_require__(14);
/* unused harmony export svg */

function hh(tagName) {
    return function () {
        var selector = arguments[0];
        var data = arguments[1];
        var children = arguments[2];
        if (isSelector(selector))
            if (Array.isArray(data))
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__h__["a" /* h */])(tagName + selector, {}, data);
            else if (typeof data === 'object')
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__h__["a" /* h */])(tagName + selector, data, children);
            else
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__h__["a" /* h */])(tagName + selector, {});
        if (Array.isArray(selector))
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__h__["a" /* h */])(tagName, {}, selector);
        else if (typeof selector === 'object')
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__h__["a" /* h */])(tagName, selector, data);
        else
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__h__["a" /* h */])(tagName, {});
    };
}
;
function isValidString(param) {
    return typeof param === 'string' && param.length > 0;
}
function isSelector(param) {
    return isValidString(param) && (param[0] === '.' || param[0] === '#');
}
function createSVGHelper() {
    var svg = hh('svg');
    svg.a = hh('a');
    svg.altGlyph = hh('altGlyph');
    svg.altGlyphDef = hh('altGlyphDef');
    svg.altGlyphItem = hh('altGlyphItem');
    svg.animate = hh('animate');
    svg.animateColor = hh('animateColor');
    svg.animateMotion = hh('animateMotion');
    svg.animateTransform = hh('animateTransform');
    svg.circle = hh('circle');
    svg.clipPath = hh('clipPath');
    svg.colorProfile = hh('colorProfile');
    svg.cursor = hh('cursor');
    svg.defs = hh('defs');
    svg.desc = hh('desc');
    svg.ellipse = hh('ellipse');
    svg.feBlend = hh('feBlend');
    svg.feColorMatrix = hh('feColorMatrix');
    svg.feComponentTransfer = hh('feComponentTransfer');
    svg.feComposite = hh('feComposite');
    svg.feConvolveMatrix = hh('feConvolveMatrix');
    svg.feDiffuseLighting = hh('feDiffuseLighting');
    svg.feDisplacementMap = hh('feDisplacementMap');
    svg.feDistantLight = hh('feDistantLight');
    svg.feFlood = hh('feFlood');
    svg.feFuncA = hh('feFuncA');
    svg.feFuncB = hh('feFuncB');
    svg.feFuncG = hh('feFuncG');
    svg.feFuncR = hh('feFuncR');
    svg.feGaussianBlur = hh('feGaussianBlur');
    svg.feImage = hh('feImage');
    svg.feMerge = hh('feMerge');
    svg.feMergeNode = hh('feMergeNode');
    svg.feMorphology = hh('feMorphology');
    svg.feOffset = hh('feOffset');
    svg.fePointLight = hh('fePointLight');
    svg.feSpecularLighting = hh('feSpecularLighting');
    svg.feSpotlight = hh('feSpotlight');
    svg.feTile = hh('feTile');
    svg.feTurbulence = hh('feTurbulence');
    svg.filter = hh('filter');
    svg.font = hh('font');
    svg.fontFace = hh('fontFace');
    svg.fontFaceFormat = hh('fontFaceFormat');
    svg.fontFaceName = hh('fontFaceName');
    svg.fontFaceSrc = hh('fontFaceSrc');
    svg.fontFaceUri = hh('fontFaceUri');
    svg.foreignObject = hh('foreignObject');
    svg.g = hh('g');
    svg.glyph = hh('glyph');
    svg.glyphRef = hh('glyphRef');
    svg.hkern = hh('hkern');
    svg.image = hh('image');
    svg.linearGradient = hh('linearGradient');
    svg.marker = hh('marker');
    svg.mask = hh('mask');
    svg.metadata = hh('metadata');
    svg.missingGlyph = hh('missingGlyph');
    svg.mpath = hh('mpath');
    svg.path = hh('path');
    svg.pattern = hh('pattern');
    svg.polygon = hh('polygon');
    svg.polyline = hh('polyline');
    svg.radialGradient = hh('radialGradient');
    svg.rect = hh('rect');
    svg.script = hh('script');
    svg.set = hh('set');
    svg.stop = hh('stop');
    svg.style = hh('style');
    svg.switch = hh('switch');
    svg.symbol = hh('symbol');
    svg.text = hh('text');
    svg.textPath = hh('textPath');
    svg.title = hh('title');
    svg.tref = hh('tref');
    svg.tspan = hh('tspan');
    svg.use = hh('use');
    svg.view = hh('view');
    svg.vkern = hh('vkern');
    return svg;
}
var svg = createSVGHelper();
//# sourceMappingURL=svg.js.map

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MotorcycleVNode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__htmldomapi__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(33);
/* harmony export (immutable) */ exports["a"] = init;




var hooks = ['create', 'update', 'remove', 'destroy', 'pre', 'post'];
var emptyVnode = new __WEBPACK_IMPORTED_MODULE_0__MotorcycleVNode__["a" /* MotorcycleVNode */](void 0, void 0, void 0, {}, [], void 0, void 0, void 0);
function init(modules, api) {
    var i;
    var j;
    var cbs = {};
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* isUndef */])(api))
        api = __WEBPACK_IMPORTED_MODULE_2__htmldomapi__["b" /* default */];
    for (i = 0; i < hooks.length; ++i) {
        cbs[hooks[i]] = [];
        for (j = 0; j < modules.length; ++j) {
            var hook = modules[j][hooks[i]];
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(hook))
                cbs[hooks[i]].push(hook.bind(modules[j]));
        }
    }
    function createRmCb(childElm, listeners) {
        return function () {
            if (--listeners === 0) {
                var parent_1 = api.parentNode(childElm);
                api.removeChild(parent_1, childElm);
            }
        };
    }
    function createElm(vnode, insertedVnodeQueue) {
        var i;
        var data = vnode.data;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(data)) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(i = data.hook) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(i = i.init)) {
                i(vnode);
                data = vnode.data;
            }
        }
        var elm;
        var children = vnode.children;
        var tagName = vnode.tagName;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(tagName)) {
            elm = vnode.elm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(data) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(i = data.ns)
                ? api.createElementNS(i, tagName)
                : api.createElement(tagName);
            if (vnode.id)
                elm.id = vnode.id;
            if (vnode.className)
                elm.className = vnode.className;
            if (__WEBPACK_IMPORTED_MODULE_1__is__["a" /* default */].array(children)) {
                for (i = 0; i < children.length; ++i) {
                    api.appendChild(elm, createElm(children[i], insertedVnodeQueue));
                }
            }
            else if (__WEBPACK_IMPORTED_MODULE_1__is__["a" /* default */].primitive(vnode.text)) {
                api.appendChild(elm, api.createTextNode(vnode.text));
            }
            for (i = 0; i < cbs.create.length; ++i)
                cbs.create[i](emptyVnode, vnode);
            i = vnode.data && vnode.data.hook; // Reuse letiable
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(i)) {
                if (i.create)
                    i.create(emptyVnode, vnode);
                if (i.insert)
                    insertedVnodeQueue.push(vnode);
            }
        }
        else {
            elm = vnode.elm = api.createTextNode(vnode.text);
        }
        return vnode.elm;
    }
    function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
        for (; startIdx <= endIdx; ++startIdx) {
            api.insertBefore(parentElm, createElm(vnodes[startIdx], insertedVnodeQueue), before);
        }
    }
    function invokeDestroyHook(vnode) {
        var i;
        var j;
        var data = vnode.data;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(data)) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(i = data.hook) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(i = i.destroy))
                i(vnode);
            for (i = 0; i < cbs.destroy.length; ++i)
                cbs.destroy[i](vnode);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(i = vnode.children)) {
                for (j = 0; j < vnode.children.length; ++j) {
                    invokeDestroyHook(vnode.children[j]);
                }
            }
        }
    }
    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
        for (; startIdx <= endIdx; ++startIdx) {
            var i_1 = void 0;
            var listeners = void 0;
            var rm = void 0;
            var ch = vnodes[startIdx];
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(ch)) {
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(ch.tagName)) {
                    invokeDestroyHook(ch);
                    listeners = cbs.remove.length + 1;
                    rm = createRmCb(ch.elm, listeners);
                    for (i_1 = 0; i_1 < cbs.remove.length; ++i_1)
                        cbs.remove[i_1](ch, rm);
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(i_1 = ch.data) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(i_1 = i_1.hook) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(i_1 = i_1.remove)) {
                        i_1(ch, rm);
                    }
                    else {
                        rm();
                    }
                }
                else {
                    api.removeChild(parentElm, ch.elm);
                }
            }
        }
    }
    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
        var oldStartIdx = 0, newStartIdx = 0;
        var oldEndIdx = oldCh.length - 1;
        var oldStartVnode = oldCh[0];
        var oldEndVnode = oldCh[oldEndIdx];
        var newEndIdx = newCh.length - 1;
        var newStartVnode = newCh[0];
        var newEndVnode = newCh[newEndIdx];
        var oldKeyToIdx = undefined;
        var idxInOld;
        var elmToMove;
        var before;
        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* isUndef */])(oldStartVnode)) {
                oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
            }
            else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* isUndef */])(oldEndVnode)) {
                oldEndVnode = oldCh[--oldEndIdx];
            }
            else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* sameVNode */])(oldStartVnode, newStartVnode)) {
                patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
                oldStartVnode = oldCh[++oldStartIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* sameVNode */])(oldEndVnode, newEndVnode)) {
                patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
                oldEndVnode = oldCh[--oldEndIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* sameVNode */])(oldStartVnode, newEndVnode)) {
                patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
                api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
                oldStartVnode = oldCh[++oldStartIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* sameVNode */])(oldEndVnode, newStartVnode)) {
                patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
                api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                oldEndVnode = oldCh[--oldEndIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* isUndef */])(oldKeyToIdx))
                    oldKeyToIdx = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["d" /* createKeyToOldIdx */])(oldCh, oldStartIdx, oldEndIdx);
                idxInOld = oldKeyToIdx[newStartVnode.key];
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* isUndef */])(idxInOld)) {
                    api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
                    newStartVnode = newCh[++newStartIdx];
                }
                else {
                    elmToMove = oldCh[idxInOld];
                    patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
                    oldCh[idxInOld] = void 0;
                    var newNode = elmToMove.elm;
                    var referenceNode = oldStartVnode.elm;
                    if (newNode !== referenceNode)
                        api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
                    newStartVnode = newCh[++newStartIdx];
                }
            }
        }
        if (oldStartIdx > oldEndIdx) {
            before = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* isUndef */])(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
            addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
        }
        else if (newStartIdx > newEndIdx) {
            removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
        }
    }
    function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
        var i;
        var hook;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(i = vnode.data) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(hook = i.hook) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(i = hook.prepatch)) {
            i(oldVnode, vnode);
        }
        var elm = vnode.elm = oldVnode.elm, oldCh = oldVnode.children, ch = vnode.children;
        if (oldVnode === vnode)
            return;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* sameVNode */])(oldVnode, vnode)) {
            var parentElm = api.parentNode(oldVnode.elm);
            elm = createElm(vnode, insertedVnodeQueue);
            api.insertBefore(parentElm, elm, oldVnode.elm);
            removeVnodes(parentElm, [oldVnode], 0, 0);
            return;
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(vnode.data)) {
            for (i = 0; i < cbs.update.length; ++i)
                cbs.update[i](oldVnode, vnode);
            i = vnode.data.hook;
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(i) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(i = i.update))
                i(oldVnode, vnode);
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* isUndef */])(vnode.text)) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(oldCh) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(ch)) {
                if (oldCh !== ch)
                    updateChildren(elm, oldCh, ch, insertedVnodeQueue);
            }
            else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(ch)) {
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(oldVnode.text))
                    api.setTextContent(elm, '');
                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
            }
            else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(oldCh)) {
                removeVnodes(elm, oldCh, 0, oldCh.length - 1);
            }
            else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(oldVnode.text)) {
                api.setTextContent(elm, '');
            }
        }
        else if (oldVnode.text !== vnode.text) {
            api.setTextContent(elm, vnode.text);
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(hook) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* isDef */])(i = hook.postpatch)) {
            i(oldVnode, vnode);
        }
    }
    return function patch(oldVNode, vNode) {
        var elm;
        var parent;
        var insertedVnodeQueue = [];
        for (i = 0; i < cbs.pre.length; ++i)
            cbs.pre[i]();
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* isUndef */])(oldVNode.elm)) {
            oldVNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["e" /* emptyNodeAt */])(oldVNode);
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* sameVNode */])(oldVNode, vNode)) {
            patchVnode(oldVNode, vNode, insertedVnodeQueue);
        }
        else {
            elm = oldVNode.elm;
            parent = api.parentNode(elm);
            createElm(vNode, insertedVnodeQueue);
            if (parent !== null) {
                api.insertBefore(parent, vNode.elm, api.nextSibling(elm));
                removeVnodes(parent, [oldVNode], 0, 0);
            }
        }
        for (var i_2 = 0; i_2 < insertedVnodeQueue.length; ++i_2) {
            insertedVnodeQueue[i_2].data.hook.insert(insertedVnodeQueue[i_2]);
        }
        for (var i_3 = 0; i_3 < cbs.post.length; ++i_3)
            cbs.post[i_3]();
        return vNode;
    };
}
//# sourceMappingURL=init.js.map

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_most_subject__ = __webpack_require__(7);
/* unused harmony export captureClicks */

var clickEvent = 'undefined' !== typeof document && document.ontouchstart ?
    'touchstart' : 'click';
function which(ev) {
    if (typeof window === 'undefined') {
        return false;
    }
    var e = ev || window.event;
    return e.which === null ? e.button : e.which;
}
function sameOrigin(href) {
    if (typeof window === 'undefined') {
        return false;
    }
    return href && href.indexOf(window.location.origin) === 0;
}
function makeClickListener(push) {
    return function clickListener(event) {
        if (which(event) !== 1) {
            return;
        }
        if (event.metaKey || event.ctrlKey || event.shiftKey) {
            return;
        }
        if (event.defaultPrevented) {
            return;
        }
        var element = event.target;
        while (element && element.nodeName !== 'A') {
            element = element.parentNode;
        }
        if (!element || element.nodeName !== 'A') {
            return;
        }
        if (element.hasAttribute('download') ||
            element.getAttribute('rel') === 'external') {
            return;
        }
        if (element.target) {
            return;
        }
        var link = element.getAttribute('href');
        if (link && link.indexOf('mailto:') > -1 || link.charAt(0) === '#') {
            return;
        }
        if (!sameOrigin(element.href)) {
            return;
        }
        event.preventDefault();
        var pathname = element.pathname, search = element.search, _a = element.hash, hash = _a === void 0 ? '' : _a;
        push(pathname + search + hash);
    };
}
function captureAnchorClicks(push) {
    var listener = makeClickListener(push);
    if (typeof window !== 'undefined')
        document.addEventListener(clickEvent, listener, false);
}
function captureClicks(historyDriver) {
    return function historyDriverWithClickCapture(sink$) {
        var subject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most_subject__["sync"])();
        captureAnchorClicks(function (path) {
            subject.next({ type: 'push', path: path });
        });
        var stream = subject.merge(sink$);
        return historyDriver(stream);
    };
}
//# sourceMappingURL=captureClicks.js.map

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prehistoric__ = __webpack_require__(137);
/* harmony export (immutable) */ exports["a"] = historyDriver;

function historyDriver(sink$) {
    var _a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prehistoric__["a" /* createHistory */])(), push = _a.push, replace = _a.replace, go = _a.go, history = _a.history;
    sink$.observe(function (input) {
        if (typeof input === 'string')
            return push(input);
        if (input.type === 'push')
            return push(input.path, input.state);
        if (input.type === 'replace')
            return replace(input.path, input.state);
        if (input.type === 'go')
            return go(input.amount);
        if (input.type === 'goBack')
            return go(-1);
        if (input.type === 'goForward')
            return go(1);
    });
    return history;
}
//# sourceMappingURL=historyDriver.js.map

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__historyDriver__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__captureClicks__ = __webpack_require__(71);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__historyDriver__["a"]; });
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_most__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__most_prelude__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_most_subject__ = __webpack_require__(7);
/* unused harmony export Router */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var Router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__most_prelude__["p" /* curry2 */])(function Router(definitions, sources) {
    var match$ = sources.router.define(definitions).thru(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_most_subject__["hold"])(1));
    return match$.filter(isNotNull).map(function (_a) {
        var path = _a.path, value = _a.value;
        var router = sources.router.path(path);
        var sinks = value(__assign({}, sources, { router: router }));
        var sinks$ = typeof sinks.observe === 'function'
            ? sinks.map(augmentSinks)
            : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["h" /* of */])(sinks).map(augmentSinks);
        return sinks$;
    })
        .switch();
});
function augmentSinks(nestedSinks) {
    return __assign({}, nestedSinks, { router: (nestedSinks.router || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["b" /* never */])()).skipRepeatsWith(equalPaths) });
}
;
function isNotNull(_a) {
    var path = _a.path;
    return path !== null;
}
function equalPaths(_a, _b) {
    var path = _a.path;
    var path2 = _b.path;
    return path !== path2;
}
//# sourceMappingURL=RouterHOC.js.map

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["b"] = isStrictlyInScope;
/* harmony export (immutable) */ exports["c"] = getFilteredPath;
/* unused harmony export getUnfilteredPath */
/* unused harmony export newLocation */
/* harmony export (immutable) */ exports["a"] = splitPath;
/* unused harmony export filterPath */
/* harmony export (immutable) */ exports["d"] = pathJoin;
function isStrictlyInScope(namespace) {
    return function (location) {
        var pathParts = splitPath(location.path);
        return namespace.every(function (v, i) { return pathParts[i] === v; });
    };
}
function getFilteredPath(namespace, path) {
    return '/' + filterPath(splitPath(path), namespace);
}
function getUnfilteredPath(namespace, path) {
    return path.replace(getFilteredPath(namespace, path), '');
}
;
function newLocation(location, pathname) {
    var l = {};
    var keys = Object.keys(location);
    for (var i = 0; i < keys.length; ++i) {
        l[keys[i]] = location[keys[i]];
    }
    l.pathname = pathname;
    return l;
}
function splitPath(path) {
    return path.split('/').filter(function (p) { return p.length > 0; });
}
function filterPath(pathParts, namespace) {
    return pathParts.filter(function (part) { return namespace.indexOf(part) < 0; }).join('/');
}
function pathJoin(parts) {
    var replace = new RegExp('/{1,}', 'g');
    return parts.join('/').replace(replace, '/');
}
//# sourceMappingURL=helpers.js.map

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routerDriver__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RouterSource__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RouterHOC__ = __webpack_require__(74);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__routerDriver__["a"]; });
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */



//# sourceMappingURL=index.js.map

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__motorcycle_history__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RouterSource__ = __webpack_require__(34);
/* harmony export (immutable) */ exports["a"] = routerDriver;


function routerDriver(sink$) {
    return new __WEBPACK_IMPORTED_MODULE_1__RouterSource__["a" /* RouterSource */](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__motorcycle_history__["a" /* historyDriver */])(sink$), []);
}
;
//# sourceMappingURL=routerDriver.js.map

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_most__ = __webpack_require__(4);
/* harmony export (immutable) */ exports["a"] = combineObj;

function combineObj(obj) {
    const keys = Object.keys(obj);
    const keysCount = keys.length;
    const sources = new Array(keysCount);
    const sanitizedKeys = new Array(keysCount);
    let i = 0;
    for (; i < keysCount; ++i) {
        sanitizedKeys[i] = keys[i].replace(/\$$/, ``);
        sources[i] = obj[keys[i]];
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["i" /* combineArray */])((...args) => {
        const combination = {};
        for (i = 0; i < keysCount; ++i) {
            combination[sanitizedKeys[i]] = args[i];
        }
        return combination;
    }, sources);
}
//# sourceMappingURL=index.js.map

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__most_prelude__ = __webpack_require__(1);

const complete = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__most_prelude__["p" /* curry2 */])(function complete(value, subject) {
    return subject.complete(value);
});
/* harmony export (immutable) */ exports["a"] = complete;

//# sourceMappingURL=complete.js.map

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__most_prelude__ = __webpack_require__(1);

const error = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__most_prelude__["p" /* curry2 */])(function error(err, subject) {
    return subject.error(err);
});
/* harmony export (immutable) */ exports["a"] = error;

//# sourceMappingURL=error.js.map

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__most_prelude__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sources__ = __webpack_require__(36);


const hold = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__most_prelude__["p" /* curry2 */])(function hold(bufferSize, subject) {
    return new subject.constructor(new __WEBPACK_IMPORTED_MODULE_1__sources__["a" /* HoldSubjectSource */](subject.source, bufferSize));
});
/* harmony export (immutable) */ exports["a"] = hold;

//# sourceMappingURL=hold.js.map

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__next__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complete__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hold__ = __webpack_require__(81);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__next__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__error__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__complete__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__hold__["a"]; });




//# sourceMappingURL=index.js.map

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__most_prelude__ = __webpack_require__(1);

const next = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__most_prelude__["p" /* curry2 */])(function next(value, subject) {
    return subject.next(value);
});
/* harmony export (immutable) */ exports["a"] = next;

//# sourceMappingURL=next.js.map

/***/ },
/* 84 */
/***/ function(module, exports) {

//# sourceMappingURL=interfaces.js.map

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_most__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__most_multicast__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__most_prelude__ = __webpack_require__(1);
/* unused harmony export dropAndAppend */



class HoldSubjectSource extends __WEBPACK_IMPORTED_MODULE_1__most_multicast__["b" /* MulticastSource */] {
    constructor(source, bufferSize) {
        super(source);
        this.has = false;
        this.buffer = [];
        this.bufferSize = bufferSize;
    }
    add(sink) {
        if (this.has) {
            pushEvents(this.buffer, sink);
        }
        return super.add(sink);
    }
    event(time, value) {
        this.has = true;
        this.buffer = dropAndAppend(value, this.buffer, this.bufferSize);
        return super.event(time, value);
    }
}
/* harmony export (immutable) */ exports["a"] = HoldSubjectSource;

function pushEvents(buffer, sink) {
    const length = buffer.length;
    for (let i = 0; i < length; ++i) {
        sink.event(__WEBPACK_IMPORTED_MODULE_0_most__["a" /* defaultScheduler */].now(), buffer[i]);
    }
}
function dropAndAppend(value, buffer, bufferSize) {
    if (buffer.length === bufferSize) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__most_prelude__["n" /* append */])(value, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__most_prelude__["m" /* drop */])(1, buffer));
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__most_prelude__["n" /* append */])(value, buffer);
}
//# sourceMappingURL=HoldSubjectSource.js.map

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_most__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__most_multicast__ = __webpack_require__(8);
/* unused harmony export async */
/* unused harmony export asAsync */


function async() {
    return asAsync(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["b" /* never */])());
}
function asAsync(stream) {
    return new AsyncSubject(new __WEBPACK_IMPORTED_MODULE_1__most_multicast__["b" /* MulticastSource */](stream.source));
}
class AsyncSubject extends __WEBPACK_IMPORTED_MODULE_0_most__["c" /* Stream */] {
    constructor(source) {
        super(source);
    }
    next(value) {
        __WEBPACK_IMPORTED_MODULE_0_most__["a" /* defaultScheduler */].asap(__WEBPACK_IMPORTED_MODULE_0_most__["d" /* PropagateTask */].event(value, this.source));
        return this;
    }
    error(err) {
        __WEBPACK_IMPORTED_MODULE_0_most__["a" /* defaultScheduler */].asap(__WEBPACK_IMPORTED_MODULE_0_most__["d" /* PropagateTask */].error(err, this.source));
        return this;
    }
    complete(value) {
        __WEBPACK_IMPORTED_MODULE_0_most__["a" /* defaultScheduler */].asap(__WEBPACK_IMPORTED_MODULE_0_most__["d" /* PropagateTask */].end(value, this.source));
        return this;
    }
}
/* unused harmony export AsyncSubject */

//# sourceMappingURL=index.js.map

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__async__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sync__ = __webpack_require__(88);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__sync__["a"]; });


//# sourceMappingURL=index.js.map

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_most__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__most_multicast__ = __webpack_require__(8);
/* harmony export (immutable) */ exports["a"] = sync;
/* unused harmony export asSync */


function sync() {
    return asSync(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["b" /* never */])());
}
function asSync(stream) {
    return new SyncSubject(new __WEBPACK_IMPORTED_MODULE_1__most_multicast__["b" /* MulticastSource */](stream.source));
}
class SyncSubject extends __WEBPACK_IMPORTED_MODULE_0_most__["c" /* Stream */] {
    constructor(source) {
        super(source);
    }
    next(value) {
        this.source.event(__WEBPACK_IMPORTED_MODULE_0_most__["a" /* defaultScheduler */].now(), value);
        return this;
    }
    error(err) {
        this.source.error(__WEBPACK_IMPORTED_MODULE_0_most__["a" /* defaultScheduler */].now(), err);
        return this;
    }
    complete(value) {
        this.source.end(__WEBPACK_IMPORTED_MODULE_0_most__["a" /* defaultScheduler */].now(), value);
        return this;
    }
}
/* unused harmony export SyncSubject */

//# sourceMappingURL=index.js.map

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = LinkedList;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

/**
 * Doubly linked list
 * @constructor
 */
function LinkedList () {
  this.head = null
  this.length = 0
}

/**
 * Add a node to the end of the list
 * @param {{prev:Object|null, next:Object|null, dispose:function}} x node to add
 */
LinkedList.prototype.add = function (x) {
  if (this.head !== null) {
    this.head.prev = x
    x.next = this.head
  }
  this.head = x
  ++this.length
}

/**
 * Remove the provided node from the list
 * @param {{prev:Object|null, next:Object|null, dispose:function}} x node to remove
 */
LinkedList.prototype.remove = function (x) { // eslint-disable-line  complexity
  --this.length
  if (x === this.head) {
    this.head = this.head.next
  }
  if (x.next !== null) {
    x.next.prev = x.prev
    x.next = null
  }
  if (x.prev !== null) {
    x.prev.next = x.next
    x.prev = null
  }
}

/**
 * @returns {boolean} true iff there are no nodes in the list
 */
LinkedList.prototype.isEmpty = function () {
  return this.length === 0
}

/**
 * Dispose all nodes
 * @returns {Promise} promise that fulfills when all nodes have been disposed,
 *  or rejects if an error occurs while disposing
 */
LinkedList.prototype.dispose = function () {
  if (this.isEmpty()) {
    return Promise.resolve()
  }

  var promises = []
  var x = this.head
  this.head = null
  this.length = 0

  while (x !== null) {
    promises.push(x.dispose())
    x = x.next
  }

  return Promise.all(promises)
}


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = isPromise;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

function isPromise (p) {
  return p !== null && typeof p === 'object' && typeof p.then === 'function'
}


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = Queue;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

// Based on https://github.com/petkaantonov/deque

function Queue (capPow2) {
  this._capacity = capPow2 || 32
  this._length = 0
  this._head = 0
}

Queue.prototype.push = function (x) {
  var len = this._length
  this._checkCapacity(len + 1)

  var i = (this._head + len) & (this._capacity - 1)
  this[i] = x
  this._length = len + 1
}

Queue.prototype.shift = function () {
  var head = this._head
  var x = this[head]

  this[head] = void 0
  this._head = (head + 1) & (this._capacity - 1)
  this._length--
  return x
}

Queue.prototype.isEmpty = function () {
  return this._length === 0
}

Queue.prototype.length = function () {
  return this._length
}

Queue.prototype._checkCapacity = function (size) {
  if (this._capacity < size) {
    this._ensureCapacity(this._capacity << 1)
  }
}

Queue.prototype._ensureCapacity = function (capacity) {
  var oldCapacity = this._capacity
  this._capacity = capacity

  var last = this._head + this._length

  if (last > oldCapacity) {
    copy(this, 0, this, oldCapacity, last & (oldCapacity - 1))
  }
}

function copy (src, srcIndex, dst, dstIndex, len) {
  for (var j = 0; j < len; ++j) {
    dst[j + dstIndex] = src[j + srcIndex]
    src[j + srcIndex] = void 0
  }
}


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runSource__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__disposable_dispose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scheduler_PropagateTask__ = __webpack_require__(5);
/* harmony export (immutable) */ exports["a"] = scan;
/* harmony export (immutable) */ exports["b"] = reduce;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */







/**
 * Create a stream containing successive reduce results of applying f to
 * the previous reduce result and the current stream item.
 * @param {function(result:*, x:*):*} f reducer function
 * @param {*} initial initial value
 * @param {Stream} stream stream to scan
 * @returns {Stream} new stream containing successive reduce results
 */
function scan (f, initial, stream) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new Scan(f, initial, stream.source))
}

function Scan (f, z, source) {
  this.source = source
  this.f = f
  this.value = z
}

Scan.prototype.run = function (sink, scheduler) {
  var d1 = scheduler.asap(__WEBPACK_IMPORTED_MODULE_4__scheduler_PropagateTask__["a" /* default */].event(this.value, sink))
  var d2 = this.source.run(new ScanSink(this.f, this.value, sink), scheduler)
  return __WEBPACK_IMPORTED_MODULE_3__disposable_dispose__["d" /* all */]([d1, d2])
}

function ScanSink (f, z, sink) {
  this.f = f
  this.value = z
  this.sink = sink
}

ScanSink.prototype.event = function (t, x) {
  var f = this.f
  this.value = f(this.value, x)
  this.sink.event(t, this.value)
}

ScanSink.prototype.error = __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__["a" /* default */].prototype.error
ScanSink.prototype.end = __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__["a" /* default */].prototype.end

/**
* Reduce a stream to produce a single result.  Note that reducing an infinite
* stream will return a Promise that never fulfills, but that may reject if an error
* occurs.
* @param {function(result:*, x:*):*} f reducer function
* @param {*} initial initial value
* @param {Stream} stream to reduce
* @returns {Promise} promise for the file result of the reduce
*/
function reduce (f, initial, stream) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__runSource__["a" /* withDefaultScheduler */])(new Reduce(f, initial, stream.source))
}

function Reduce (f, z, source) {
  this.source = source
  this.f = f
  this.value = z
}

Reduce.prototype.run = function (sink, scheduler) {
  return this.source.run(new ReduceSink(this.f, this.value, sink), scheduler)
}

function ReduceSink (f, z, sink) {
  this.f = f
  this.value = z
  this.sink = sink
}

ReduceSink.prototype.event = function (t, x) {
  var f = this.f
  this.value = f(this.value, x)
  this.sink.event(t, this.value)
}

ReduceSink.prototype.error = __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__["a" /* default */].prototype.error

ReduceSink.prototype.end = function (t) {
  this.sink.end(t, this.value)
}


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__combine__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__most_prelude__ = __webpack_require__(1);
/* harmony export (immutable) */ exports["a"] = ap;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */




/**
 * Assume fs is a stream containing functions, and apply the latest function
 * in fs to the latest value in xs.
 * fs:         --f---------g--------h------>
 * xs:         -a-------b-------c-------d-->
 * ap(fs, xs): --fa-----fb-gb---gc--hc--hd->
 * @param {Stream} fs stream of functions to apply to the latest x
 * @param {Stream} xs stream of values to which to apply all the latest f
 * @returns {Stream} stream containing all the applications of fs to xs
 */
function ap (fs, xs) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__combine__["a" /* combine */])(__WEBPACK_IMPORTED_MODULE_1__most_prelude__["h" /* apply */], fs, xs)
}


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__source_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__continueWith__ = __webpack_require__(38);
/* harmony export (immutable) */ exports["b"] = cons;
/* harmony export (immutable) */ exports["a"] = concat;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */




/**
 * @param {*} x value to prepend
 * @param {Stream} stream
 * @returns {Stream} new stream with x prepended
 */
function cons (x, stream) {
  return concat(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__source_core__["a" /* of */])(x), stream)
}

/**
* @param {Stream} left
* @param {Stream} right
* @returns {Stream} new stream containing all events in left followed by all
*  events in right.  This *timeshifts* right to the end of left.
*/
function concat (left, right) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__continueWith__["a" /* continueWith */])(function () {
    return right
  }, left)
}


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mergeConcurrently__ = __webpack_require__(15);
/* harmony export (immutable) */ exports["a"] = concatMap;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */



/**
 * Map each value in stream to a new stream, and concatenate them all
 * stream:              -a---b---cX
 * f(a):                 1-1-1-1X
 * f(b):                        -2-2-2-2X
 * f(c):                                -3-3-3-3X
 * stream.concatMap(f): -1-1-1-1-2-2-2-2-3-3-3-3X
 * @param {function(x:*):Stream} f function to map each value to a stream
 * @param {Stream} stream
 * @returns {Stream} new stream containing all events from each stream returned by f
 */
function concatMap (f, stream) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mergeConcurrently__["a" /* mergeMapConcurrently */])(f, 1, stream)
}


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__disposable_dispose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scheduler_PropagateTask__ = __webpack_require__(5);
/* harmony export (immutable) */ exports["a"] = delay;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */






/**
 * @param {Number} delayTime milliseconds to delay each item
 * @param {Stream} stream
 * @returns {Stream} new stream containing the same items, but delayed by ms
 */
function delay (delayTime, stream) {
  return delayTime <= 0 ? stream
    : new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new Delay(delayTime, stream.source))
}

function Delay (dt, source) {
  this.dt = dt
  this.source = source
}

Delay.prototype.run = function (sink, scheduler) {
  var delaySink = new DelaySink(this.dt, sink, scheduler)
  return __WEBPACK_IMPORTED_MODULE_2__disposable_dispose__["d" /* all */]([delaySink, this.source.run(delaySink, scheduler)])
}

function DelaySink (dt, sink, scheduler) {
  this.dt = dt
  this.sink = sink
  this.scheduler = scheduler
}

DelaySink.prototype.dispose = function () {
  var self = this
  this.scheduler.cancelAll(function (task) {
    return task.sink === self.sink
  })
}

DelaySink.prototype.event = function (t, x) {
  this.scheduler.delay(this.dt, __WEBPACK_IMPORTED_MODULE_3__scheduler_PropagateTask__["a" /* default */].event(x, this.sink))
}

DelaySink.prototype.end = function (t, x) {
  this.scheduler.delay(this.dt, __WEBPACK_IMPORTED_MODULE_3__scheduler_PropagateTask__["a" /* default */].end(x, this.sink))
}

DelaySink.prototype.error = __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__["a" /* default */].prototype.error


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sink_SafeSink__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__disposable_dispose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__source_tryEvent__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scheduler_PropagateTask__ = __webpack_require__(5);
/* unused harmony export recoverWith */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return flatMapError; });
/* unused harmony export throwError */
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */







/**
 * If stream encounters an error, recover and continue with items from stream
 * returned by f.
 * @param {function(error:*):Stream} f function which returns a new stream
 * @param {Stream} stream
 * @returns {Stream} new stream which will recover from an error by calling f
 */
function recoverWith (f, stream) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new RecoverWith(f, stream.source))
}

var flatMapError = recoverWith

/**
 * Create a stream containing only an error
 * @param {*} e error value, preferably an Error or Error subtype
 * @returns {Stream} new stream containing only an error
 */
function throwError (e) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new ErrorSource(e))
}

function ErrorSource (e) {
  this.value = e
}

ErrorSource.prototype.run = function (sink, scheduler) {
  return scheduler.asap(new __WEBPACK_IMPORTED_MODULE_4__scheduler_PropagateTask__["a" /* default */](runError, this.value, sink))
}

function runError (t, e, sink) {
  sink.error(t, e)
}

function RecoverWith (f, source) {
  this.f = f
  this.source = source
}

RecoverWith.prototype.run = function (sink, scheduler) {
  return new RecoverWithSink(this.f, this.source, sink, scheduler)
}

function RecoverWithSink (f, source, sink, scheduler) {
  this.f = f
  this.sink = new __WEBPACK_IMPORTED_MODULE_1__sink_SafeSink__["a" /* default */](sink)
  this.scheduler = scheduler
  this.disposable = source.run(this, scheduler)
}

RecoverWithSink.prototype.event = function (t, x) {
  __WEBPACK_IMPORTED_MODULE_3__source_tryEvent__["a" /* tryEvent */](t, x, this.sink)
}

RecoverWithSink.prototype.end = function (t, x) {
  __WEBPACK_IMPORTED_MODULE_3__source_tryEvent__["b" /* tryEnd */](t, x, this.sink)
}

RecoverWithSink.prototype.error = function (t, e) {
  var nextSink = this.sink.disable()

  __WEBPACK_IMPORTED_MODULE_2__disposable_dispose__["f" /* tryDispose */](t, this.disposable, this.sink)
  this._startNext(t, e, nextSink)
}

RecoverWithSink.prototype._startNext = function (t, x, sink) {
  try {
    this.disposable = this._continue(this.f, x, sink)
  } catch (e) {
    sink.error(t, e)
  }
}

RecoverWithSink.prototype._continue = function (f, x, sink) {
  var stream = f(x)
  return stream.source.run(sink, this.scheduler)
}

RecoverWithSink.prototype.dispose = function () {
  return this.disposable.dispose()
}


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fusion_Filter__ = __webpack_require__(40);
/* harmony export (immutable) */ exports["a"] = filter;
/* harmony export (immutable) */ exports["b"] = skipRepeats;
/* harmony export (immutable) */ exports["c"] = skipRepeatsWith;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */





/**
 * Retain only items matching a predicate
 * @param {function(x:*):boolean} p filtering predicate called for each item
 * @param {Stream} stream stream to filter
 * @returns {Stream} stream containing only items for which predicate returns truthy
 */
function filter (p, stream) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](__WEBPACK_IMPORTED_MODULE_2__fusion_Filter__["a" /* default */].create(p, stream.source))
}

/**
 * Skip repeated events, using === to detect duplicates
 * @param {Stream} stream stream from which to omit repeated events
 * @returns {Stream} stream without repeated events
 */
function skipRepeats (stream) {
  return skipRepeatsWith(same, stream)
}

/**
 * Skip repeated events using the provided equals function to detect duplicates
 * @param {function(a:*, b:*):boolean} equals optional function to compare items
 * @param {Stream} stream stream from which to omit repeated events
 * @returns {Stream} stream without repeated events
 */
function skipRepeatsWith (equals, stream) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new SkipRepeats(equals, stream.source))
}

function SkipRepeats (equals, source) {
  this.equals = equals
  this.source = source
}

SkipRepeats.prototype.run = function (sink, scheduler) {
  return this.source.run(new SkipRepeatsSink(this.equals, sink), scheduler)
}

function SkipRepeatsSink (equals, sink) {
  this.equals = equals
  this.sink = sink
  this.value = void 0
  this.init = true
}

SkipRepeatsSink.prototype.end = __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__["a" /* default */].prototype.end
SkipRepeatsSink.prototype.error = __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__["a" /* default */].prototype.error

SkipRepeatsSink.prototype.event = function (t, x) {
  if (this.init) {
    this.init = false
    this.value = x
    this.sink.event(t, x)
  } else if (!this.equals(this.value, x)) {
    this.value = x
    this.sink.event(t, x)
  }
}

function same (a, b) {
  return a === b
}


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__disposable_dispose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scheduler_PropagateTask__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fusion_Map__ = __webpack_require__(17);
/* harmony export (immutable) */ exports["a"] = throttle;
/* harmony export (immutable) */ exports["b"] = debounce;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */







/**
 * Limit the rate of events by suppressing events that occur too often
 * @param {Number} period time to suppress events
 * @param {Stream} stream
 * @returns {Stream}
 */
function throttle (period, stream) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](throttleSource(period, stream.source))
}

function throttleSource (period, source) {
  return source instanceof __WEBPACK_IMPORTED_MODULE_4__fusion_Map__["a" /* default */] ? commuteMapThrottle(period, source)
    : source instanceof Throttle ? fuseThrottle(period, source)
    : new Throttle(period, source)
}

function commuteMapThrottle (period, source) {
  return __WEBPACK_IMPORTED_MODULE_4__fusion_Map__["a" /* default */].create(source.f, throttleSource(period, source.source))
}

function fuseThrottle (period, source) {
  return new Throttle(Math.max(period, source.period), source.source)
}

function Throttle (period, source) {
  this.period = period
  this.source = source
}

Throttle.prototype.run = function (sink, scheduler) {
  return this.source.run(new ThrottleSink(this.period, sink), scheduler)
}

function ThrottleSink (period, sink) {
  this.time = 0
  this.period = period
  this.sink = sink
}

ThrottleSink.prototype.event = function (t, x) {
  if (t >= this.time) {
    this.time = t + this.period
    this.sink.event(t, x)
  }
}

ThrottleSink.prototype.end = __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__["a" /* default */].prototype.end

ThrottleSink.prototype.error = __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__["a" /* default */].prototype.error

/**
 * Wait for a burst of events to subside and emit only the last event in the burst
 * @param {Number} period events occuring more frequently than this
 *  will be suppressed
 * @param {Stream} stream stream to debounce
 * @returns {Stream} new debounced stream
 */
function debounce (period, stream) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new Debounce(period, stream.source))
}

function Debounce (dt, source) {
  this.dt = dt
  this.source = source
}

Debounce.prototype.run = function (sink, scheduler) {
  return new DebounceSink(this.dt, this.source, sink, scheduler)
}

function DebounceSink (dt, source, sink, scheduler) {
  this.dt = dt
  this.sink = sink
  this.scheduler = scheduler
  this.value = void 0
  this.timer = null

  var sourceDisposable = source.run(this, scheduler)
  this.disposable = __WEBPACK_IMPORTED_MODULE_2__disposable_dispose__["d" /* all */]([this, sourceDisposable])
}

DebounceSink.prototype.event = function (t, x) {
  this._clearTimer()
  this.value = x
  this.timer = this.scheduler.delay(this.dt, __WEBPACK_IMPORTED_MODULE_3__scheduler_PropagateTask__["a" /* default */].event(x, this.sink))
}

DebounceSink.prototype.end = function (t, x) {
  if (this._clearTimer()) {
    this.sink.event(t, this.value)
    this.value = void 0
  }
  this.sink.end(t, x)
}

DebounceSink.prototype.error = function (t, x) {
  this._clearTimer()
  this.sink.error(t, x)
}

DebounceSink.prototype.dispose = function () {
  this._clearTimer()
}

DebounceSink.prototype._clearTimer = function () {
  if (this.timer === null) {
    return false
  }
  this.timer.dispose()
  this.timer = null
  return true
}


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__ = __webpack_require__(3);
/* harmony export (immutable) */ exports["a"] = loop;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */




/**
 * Generalized feedback loop. Call a stepper function for each event. The stepper
 * will be called with 2 params: the current seed and the an event value.  It must
 * return a new { seed, value } pair. The `seed` will be fed back into the next
 * invocation of stepper, and the `value` will be propagated as the event value.
 * @param {function(seed:*, value:*):{seed:*, value:*}} stepper loop step function
 * @param {*} seed initial seed value passed to first stepper call
 * @param {Stream} stream event stream
 * @returns {Stream} new stream whose values are the `value` field of the objects
 * returned by the stepper
 */
function loop (stepper, seed, stream) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new Loop(stepper, seed, stream.source))
}

function Loop (stepper, seed, source) {
  this.step = stepper
  this.seed = seed
  this.source = source
}

Loop.prototype.run = function (sink, scheduler) {
  return this.source.run(new LoopSink(this.step, this.seed, sink), scheduler)
}

function LoopSink (stepper, seed, sink) {
  this.step = stepper
  this.seed = seed
  this.sink = sink
}

LoopSink.prototype.error = __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__["a" /* default */].prototype.error

LoopSink.prototype.event = function (t, x) {
  var result = this.step(this.seed, x)
  this.seed = result.seed
  this.sink.event(t, result.value)
}

LoopSink.prototype.end = function (t) {
  this.sink.end(t, this.seed)
}


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sink_IndexSink__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__source_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__disposable_dispose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__most_prelude__ = __webpack_require__(1);
/* unused harmony export merge */
/* harmony export (immutable) */ exports["a"] = mergeArray;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */








var copy = __WEBPACK_IMPORTED_MODULE_5__most_prelude__["i" /* copy */]
var reduce = __WEBPACK_IMPORTED_MODULE_5__most_prelude__["j" /* reduce */]

/**
 * @returns {Stream} stream containing events from all streams in the argument
 * list in time order.  If two events are simultaneous they will be merged in
 * arbitrary order.
 */
function merge (/* ...streams*/) {
  return mergeArray(copy(arguments))
}

/**
 * @param {Array} streams array of stream to merge
 * @returns {Stream} stream containing events from all input observables
 * in time order.  If two events are simultaneous they will be merged in
 * arbitrary order.
 */
function mergeArray (streams) {
  var l = streams.length
  return l === 0 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__source_core__["b" /* empty */])()
    : l === 1 ? streams[0]
    : new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](mergeSources(streams))
}

/**
 * This implements fusion/flattening for merge.  It will
 * fuse adjacent merge operations.  For example:
 * - a.merge(b).merge(c) effectively becomes merge(a, b, c)
 * - merge(a, merge(b, c)) effectively becomes merge(a, b, c)
 * It does this by concatenating the sources arrays of
 * any nested Merge sources, in effect "flattening" nested
 * merge operations into a single merge.
 */
function mergeSources (streams) {
  return new Merge(reduce(appendSources, [], streams))
}

function appendSources (sources, stream) {
  var source = stream.source
  return source instanceof Merge
    ? sources.concat(source.sources)
    : sources.concat(source)
}

function Merge (sources) {
  this.sources = sources
}

Merge.prototype.run = function (sink, scheduler) {
  var l = this.sources.length
  var disposables = new Array(l)
  var sinks = new Array(l)

  var mergeSink = new MergeSink(disposables, sinks, sink)

  for (var indexSink, i = 0; i < l; ++i) {
    indexSink = sinks[i] = new __WEBPACK_IMPORTED_MODULE_2__sink_IndexSink__["a" /* default */](i, mergeSink)
    disposables[i] = this.sources[i].run(indexSink, scheduler)
  }

  return __WEBPACK_IMPORTED_MODULE_4__disposable_dispose__["d" /* all */](disposables)
}

function MergeSink (disposables, sinks, sink) {
  this.sink = sink
  this.disposables = disposables
  this.activeCount = sinks.length
}

MergeSink.prototype.error = __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__["a" /* default */].prototype.error

MergeSink.prototype.event = function (t, indexValue) {
  this.sink.event(t, indexValue.value)
}

MergeSink.prototype.end = function (t, indexedValue) {
  __WEBPACK_IMPORTED_MODULE_4__disposable_dispose__["f" /* tryDispose */](t, this.disposables[indexedValue.index], this.sink)
  if (--this.activeCount === 0) {
    this.sink.end(t, indexedValue.value)
  }
}


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__runSource__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transform__ = __webpack_require__(11);
/* harmony export (immutable) */ exports["a"] = observe;
/* harmony export (immutable) */ exports["b"] = drain;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */




/**
 * Observe all the event values in the stream in time order. The
 * provided function `f` will be called for each event value
 * @param {function(x:T):*} f function to call with each event value
 * @param {Stream<T>} stream stream to observe
 * @return {Promise} promise that fulfills after the stream ends without
 *  an error, or rejects if the stream ends with an error.
 */
function observe (f, stream) {
  return drain(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__transform__["a" /* tap */])(f, stream))
}

/**
 * "Run" a stream by creating demand and consuming all events
 * @param {Stream<T>} stream stream to drain
 * @return {Promise} promise that fulfills after the stream ends without
 *  an error, or rejects if the stream ends with an error.
 */
function drain (stream) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__runSource__["a" /* withDefaultScheduler */])(stream.source)
}


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fatalError__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__source_core__ = __webpack_require__(6);
/* unused harmony export fromPromise */
/* harmony export (immutable) */ exports["a"] = awaitPromises;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */





/**
 * Create a stream containing only the promise's fulfillment
 * value at the time it fulfills.
 * @param {Promise<T>} p promise
 * @return {Stream<T>} stream containing promise's fulfillment value.
 *  If the promise rejects, the stream will error
 */
function fromPromise (p) {
  return awaitPromises(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__source_core__["a" /* of */])(p))
}

/**
 * Turn a Stream<Promise<T>> into Stream<T> by awaiting each promise.
 * Event order is preserved.
 * @param {Stream<Promise<T>>} stream
 * @return {Stream<T>} stream of fulfillment values.  The stream will
 * error if any promise rejects.
 */
function awaitPromises (stream) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new Await(stream.source))
}

function Await (source) {
  this.source = source
}

Await.prototype.run = function (sink, scheduler) {
  return this.source.run(new AwaitSink(sink, scheduler), scheduler)
}

function AwaitSink (sink, scheduler) {
  this.sink = sink
  this.scheduler = scheduler
  this.queue = Promise.resolve()
  var self = this

	// Pre-create closures, to avoid creating them per event
  this._eventBound = function (x) {
    self.sink.event(self.scheduler.now(), x)
  }

  this._endBound = function (x) {
    self.sink.end(self.scheduler.now(), x)
  }

  this._errorBound = function (e) {
    self.sink.error(self.scheduler.now(), e)
  }
}

AwaitSink.prototype.event = function (t, promise) {
  var self = this
  this.queue = this.queue.then(function () {
    return self._event(promise)
  }).catch(this._errorBound)
}

AwaitSink.prototype.end = function (t, x) {
  var self = this
  this.queue = this.queue.then(function () {
    return self._end(x)
  }).catch(this._errorBound)
}

AwaitSink.prototype.error = function (t, e) {
  var self = this
  // Don't resolve error values, propagate directly
  this.queue = this.queue.then(function () {
    return self._errorBound(e)
  }).catch(__WEBPACK_IMPORTED_MODULE_1__fatalError__["a" /* default */])
}

AwaitSink.prototype._event = function (promise) {
  return promise.then(this._eventBound)
}

AwaitSink.prototype._end = function (x) {
  return Promise.resolve(x).then(this._endBound)
}


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__disposable_dispose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__most_prelude__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__invoke__ = __webpack_require__(18);
/* unused harmony export sample */
/* harmony export (immutable) */ exports["a"] = sampleWith;
/* harmony export (immutable) */ exports["b"] = sampleArray;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */







/**
 * When an event arrives on sampler, emit the result of calling f with the latest
 * values of all streams being sampled
 * @param {function(...values):*} f function to apply to each set of sampled values
 * @param {Stream} sampler streams will be sampled whenever an event arrives
 *  on sampler
 * @returns {Stream} stream of sampled and transformed values
 */
function sample (f, sampler /*, ...streams */) {
  return sampleArray(f, sampler, __WEBPACK_IMPORTED_MODULE_3__most_prelude__["m" /* drop */](2, arguments))
}

/**
 * When an event arrives on sampler, emit the latest event value from stream.
 * @param {Stream} sampler stream of events at whose arrival time
 *  stream's latest value will be propagated
 * @param {Stream} stream stream of values
 * @returns {Stream} sampled stream of values
 */
function sampleWith (sampler, stream) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new Sampler(__WEBPACK_IMPORTED_MODULE_3__most_prelude__["b" /* id */], sampler.source, [stream.source]))
}

function sampleArray (f, sampler, streams) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new Sampler(f, sampler.source, __WEBPACK_IMPORTED_MODULE_3__most_prelude__["a" /* map */](getSource, streams)))
}

function getSource (stream) {
  return stream.source
}

function Sampler (f, sampler, sources) {
  this.f = f
  this.sampler = sampler
  this.sources = sources
}

Sampler.prototype.run = function (sink, scheduler) {
  var l = this.sources.length
  var disposables = new Array(l + 1)
  var sinks = new Array(l)

  var sampleSink = new SampleSink(this.f, sinks, sink)

  for (var hold, i = 0; i < l; ++i) {
    hold = sinks[i] = new Hold(sampleSink)
    disposables[i] = this.sources[i].run(hold, scheduler)
  }

  disposables[i] = this.sampler.run(sampleSink, scheduler)

  return __WEBPACK_IMPORTED_MODULE_2__disposable_dispose__["d" /* all */](disposables)
}

function Hold (sink) {
  this.sink = sink
  this.hasValue = false
}

Hold.prototype.event = function (t, x) {
  this.value = x
  this.hasValue = true
  this.sink._notify(this)
}

Hold.prototype.end = function () {}
Hold.prototype.error = __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__["a" /* default */].prototype.error

function SampleSink (f, sinks, sink) {
  this.f = f
  this.sinks = sinks
  this.sink = sink
  this.active = false
}

SampleSink.prototype._notify = function () {
  if (!this.active) {
    this.active = this.sinks.every(hasValue)
  }
}

SampleSink.prototype.event = function (t) {
  if (this.active) {
    this.sink.event(t, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__invoke__["a" /* default */])(this.f, __WEBPACK_IMPORTED_MODULE_3__most_prelude__["a" /* map */](getValue, this.sinks)))
  }
}

SampleSink.prototype.end = __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__["a" /* default */].prototype.end
SampleSink.prototype.error = __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__["a" /* default */].prototype.error

function hasValue (hold) {
  return hold.hasValue
}

function getValue (hold) {
  return hold.value
}


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__source_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__disposable_dispose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fusion_Map__ = __webpack_require__(17);
/* harmony export (immutable) */ exports["a"] = take;
/* harmony export (immutable) */ exports["b"] = skip;
/* harmony export (immutable) */ exports["c"] = slice;
/* harmony export (immutable) */ exports["d"] = takeWhile;
/* harmony export (immutable) */ exports["e"] = skipWhile;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */







/**
 * @param {number} n
 * @param {Stream} stream
 * @returns {Stream} new stream containing only up to the first n items from stream
 */
function take (n, stream) {
  return slice(0, n, stream)
}

/**
 * @param {number} n
 * @param {Stream} stream
 * @returns {Stream} new stream with the first n items removed
 */
function skip (n, stream) {
  return slice(n, Infinity, stream)
}

/**
 * Slice a stream by index. Negative start/end indexes are not supported
 * @param {number} start
 * @param {number} end
 * @param {Stream} stream
 * @returns {Stream} stream containing items where start <= index < end
 */
function slice (start, end, stream) {
  return end <= start ? __WEBPACK_IMPORTED_MODULE_2__source_core__["b" /* empty */]()
    : new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](sliceSource(start, end, stream.source))
}

function sliceSource (start, end, source) {
  return source instanceof __WEBPACK_IMPORTED_MODULE_4__fusion_Map__["a" /* default */] ? commuteMapSlice(start, end, source)
    : source instanceof Slice ? fuseSlice(start, end, source)
    : new Slice(start, end, source)
}

function commuteMapSlice (start, end, source) {
  return __WEBPACK_IMPORTED_MODULE_4__fusion_Map__["a" /* default */].create(source.f, sliceSource(start, end, source.source))
}

function fuseSlice (start, end, source) {
  start += source.min
  end = Math.min(end + source.min, source.max)
  return new Slice(start, end, source.source)
}

function Slice (min, max, source) {
  this.source = source
  this.min = min
  this.max = max
}

Slice.prototype.run = function (sink, scheduler) {
  return new SliceSink(this.min, this.max - this.min, this.source, sink, scheduler)
}

function SliceSink (skip, take, source, sink, scheduler) {
  this.sink = sink
  this.skip = skip
  this.take = take
  this.disposable = __WEBPACK_IMPORTED_MODULE_3__disposable_dispose__["e" /* once */](source.run(this, scheduler))
}

SliceSink.prototype.end = __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__["a" /* default */].prototype.end
SliceSink.prototype.error = __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__["a" /* default */].prototype.error

SliceSink.prototype.event = function (t, x) { // eslint-disable-line complexity
  if (this.skip > 0) {
    this.skip -= 1
    return
  }

  if (this.take === 0) {
    return
  }

  this.take -= 1
  this.sink.event(t, x)
  if (this.take === 0) {
    this.dispose()
    this.sink.end(t, x)
  }
}

SliceSink.prototype.dispose = function () {
  return this.disposable.dispose()
}

function takeWhile (p, stream) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new TakeWhile(p, stream.source))
}

function TakeWhile (p, source) {
  this.p = p
  this.source = source
}

TakeWhile.prototype.run = function (sink, scheduler) {
  return new TakeWhileSink(this.p, this.source, sink, scheduler)
}

function TakeWhileSink (p, source, sink, scheduler) {
  this.p = p
  this.sink = sink
  this.active = true
  this.disposable = __WEBPACK_IMPORTED_MODULE_3__disposable_dispose__["e" /* once */](source.run(this, scheduler))
}

TakeWhileSink.prototype.end = __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__["a" /* default */].prototype.end
TakeWhileSink.prototype.error = __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__["a" /* default */].prototype.error

TakeWhileSink.prototype.event = function (t, x) {
  if (!this.active) {
    return
  }

  var p = this.p
  this.active = p(x)
  if (this.active) {
    this.sink.event(t, x)
  } else {
    this.dispose()
    this.sink.end(t, x)
  }
}

TakeWhileSink.prototype.dispose = function () {
  return this.disposable.dispose()
}

function skipWhile (p, stream) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new SkipWhile(p, stream.source))
}

function SkipWhile (p, source) {
  this.p = p
  this.source = source
}

SkipWhile.prototype.run = function (sink, scheduler) {
  return this.source.run(new SkipWhileSink(this.p, sink), scheduler)
}

function SkipWhileSink (p, sink) {
  this.p = p
  this.sink = sink
  this.skipping = true
}

SkipWhileSink.prototype.end = __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__["a" /* default */].prototype.end
SkipWhileSink.prototype.error = __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__["a" /* default */].prototype.error

SkipWhileSink.prototype.event = function (t, x) {
  if (this.skipping) {
    var p = this.p
    this.skipping = p(x)
    if (this.skipping) {
      return
    }
  }

  this.sink.event(t, x)
}


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__disposable_dispose__ = __webpack_require__(2);
/* harmony export (immutable) */ exports["a"] = switchLatest;
/* unused harmony export switch */
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */




/**
 * Given a stream of streams, return a new stream that adopts the behavior
 * of the most recent inner stream.
 * @param {Stream} stream of streams on which to switch
 * @returns {Stream} switching stream
 */
function switchLatest (stream) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new Switch(stream.source))
}



function Switch (source) {
  this.source = source
}

Switch.prototype.run = function (sink, scheduler) {
  var switchSink = new SwitchSink(sink, scheduler)
  return __WEBPACK_IMPORTED_MODULE_1__disposable_dispose__["d" /* all */]([switchSink, this.source.run(switchSink, scheduler)])
}

function SwitchSink (sink, scheduler) {
  this.sink = sink
  this.scheduler = scheduler
  this.current = null
  this.ended = false
}

SwitchSink.prototype.event = function (t, stream) {
  this._disposeCurrent(t) // TODO: capture the result of this dispose
  this.current = new Segment(t, Infinity, this, this.sink)
  this.current.disposable = stream.source.run(this.current, this.scheduler)
}

SwitchSink.prototype.end = function (t, x) {
  this.ended = true
  this._checkEnd(t, x)
}

SwitchSink.prototype.error = function (t, e) {
  this.ended = true
  this.sink.error(t, e)
}

SwitchSink.prototype.dispose = function () {
  return this._disposeCurrent(this.scheduler.now())
}

SwitchSink.prototype._disposeCurrent = function (t) {
  if (this.current !== null) {
    return this.current._dispose(t)
  }
}

SwitchSink.prototype._disposeInner = function (t, inner) {
  inner._dispose(t) // TODO: capture the result of this dispose
  if (inner === this.current) {
    this.current = null
  }
}

SwitchSink.prototype._checkEnd = function (t, x) {
  if (this.ended && this.current === null) {
    this.sink.end(t, x)
  }
}

SwitchSink.prototype._endInner = function (t, x, inner) {
  this._disposeInner(t, inner)
  this._checkEnd(t, x)
}

SwitchSink.prototype._errorInner = function (t, e, inner) {
  this._disposeInner(t, inner)
  this.sink.error(t, e)
}

function Segment (min, max, outer, sink) {
  this.min = min
  this.max = max
  this.outer = outer
  this.sink = sink
  this.disposable = __WEBPACK_IMPORTED_MODULE_1__disposable_dispose__["b" /* empty */]()
}

Segment.prototype.event = function (t, x) {
  if (t < this.max) {
    this.sink.event(Math.max(t, this.min), x)
  }
}

Segment.prototype.end = function (t, x) {
  this.outer._endInner(Math.max(t, this.min), x, this)
}

Segment.prototype.error = function (t, e) {
  this.outer._errorInner(Math.max(t, this.min), e, this)
}

Segment.prototype._dispose = function (t) {
  this.max = t
  __WEBPACK_IMPORTED_MODULE_1__disposable_dispose__["f" /* tryDispose */](t, this.disposable, this.sink)
}


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = thru;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

function thru (f, stream) {
  return f(stream)
}


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__disposable_dispose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__combinator_flatMap__ = __webpack_require__(39);
/* harmony export (immutable) */ exports["a"] = takeUntil;
/* harmony export (immutable) */ exports["b"] = skipUntil;
/* harmony export (immutable) */ exports["c"] = during;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */






function takeUntil (signal, stream) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new Until(signal.source, stream.source))
}

function skipUntil (signal, stream) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new Since(signal.source, stream.source))
}

function during (timeWindow, stream) {
  return takeUntil(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__combinator_flatMap__["b" /* join */])(timeWindow), skipUntil(timeWindow, stream))
}

function Until (maxSignal, source) {
  this.maxSignal = maxSignal
  this.source = source
}

Until.prototype.run = function (sink, scheduler) {
  var min = new Bound(-Infinity, sink)
  var max = new UpperBound(this.maxSignal, sink, scheduler)
  var disposable = this.source.run(new TimeWindowSink(min, max, sink), scheduler)

  return __WEBPACK_IMPORTED_MODULE_2__disposable_dispose__["d" /* all */]([min, max, disposable])
}

function Since (minSignal, source) {
  this.minSignal = minSignal
  this.source = source
}

Since.prototype.run = function (sink, scheduler) {
  var min = new LowerBound(this.minSignal, sink, scheduler)
  var max = new Bound(Infinity, sink)
  var disposable = this.source.run(new TimeWindowSink(min, max, sink), scheduler)

  return __WEBPACK_IMPORTED_MODULE_2__disposable_dispose__["d" /* all */]([min, max, disposable])
}

function Bound (value, sink) {
  this.value = value
  this.sink = sink
}

Bound.prototype.error = __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__["a" /* default */].prototype.error
Bound.prototype.event = noop
Bound.prototype.end = noop
Bound.prototype.dispose = noop

function TimeWindowSink (min, max, sink) {
  this.min = min
  this.max = max
  this.sink = sink
}

TimeWindowSink.prototype.event = function (t, x) {
  if (t >= this.min.value && t < this.max.value) {
    this.sink.event(t, x)
  }
}

TimeWindowSink.prototype.error = __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__["a" /* default */].prototype.error
TimeWindowSink.prototype.end = __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__["a" /* default */].prototype.end

function LowerBound (signal, sink, scheduler) {
  this.value = Infinity
  this.sink = sink
  this.disposable = signal.run(this, scheduler)
}

LowerBound.prototype.event = function (t /*, x */) {
  if (t < this.value) {
    this.value = t
  }
}

LowerBound.prototype.end = noop
LowerBound.prototype.error = __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__["a" /* default */].prototype.error

LowerBound.prototype.dispose = function () {
  return this.disposable.dispose()
}

function UpperBound (signal, sink, scheduler) {
  this.value = Infinity
  this.sink = sink
  this.disposable = signal.run(this, scheduler)
}

UpperBound.prototype.event = function (t, x) {
  if (t < this.value) {
    this.value = t
    this.sink.end(t, x)
  }
}

UpperBound.prototype.end = noop
UpperBound.prototype.error = __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__["a" /* default */].prototype.error

UpperBound.prototype.dispose = function () {
  return this.disposable.dispose()
}

function noop () {}


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__ = __webpack_require__(3);
/* harmony export (immutable) */ exports["a"] = timestamp;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */




function timestamp (stream) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new Timestamp(stream.source))
}

function Timestamp (source) {
  this.source = source
}

Timestamp.prototype.run = function (sink, scheduler) {
  return this.source.run(new TimestampSink(sink), scheduler)
}

function TimestampSink (sink) {
  this.sink = sink
}

TimestampSink.prototype.end = __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__["a" /* default */].prototype.end
TimestampSink.prototype.error = __WEBPACK_IMPORTED_MODULE_1__sink_Pipe__["a" /* default */].prototype.error

TimestampSink.prototype.event = function (t, x) {
  this.sink.event(t, { time: t, value: x })
}


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* harmony export (immutable) */ exports["a"] = transduce;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */



/**
 * Transform a stream by passing its events through a transducer.
 * @param  {function} transducer transducer function
 * @param  {Stream} stream stream whose events will be passed through the
 *  transducer
 * @return {Stream} stream of events transformed by the transducer
 */
function transduce (transducer, stream) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new Transduce(transducer, stream.source))
}

function Transduce (transducer, source) {
  this.transducer = transducer
  this.source = source
}

Transduce.prototype.run = function (sink, scheduler) {
  var xf = this.transducer(new Transformer(sink))
  return this.source.run(new TransduceSink(getTxHandler(xf), sink), scheduler)
}

function TransduceSink (adapter, sink) {
  this.xf = adapter
  this.sink = sink
}

TransduceSink.prototype.event = function (t, x) {
  var next = this.xf.step(t, x)

  return this.xf.isReduced(next)
    ? this.sink.end(t, this.xf.getResult(next))
    : next
}

TransduceSink.prototype.end = function (t, x) {
  return this.xf.result(x)
}

TransduceSink.prototype.error = function (t, e) {
  return this.sink.error(t, e)
}

function Transformer (sink) {
  this.time = -Infinity
  this.sink = sink
}

Transformer.prototype['@@transducer/init'] = Transformer.prototype.init = function () {}

Transformer.prototype['@@transducer/step'] = Transformer.prototype.step = function (t, x) {
  if (!isNaN(t)) {
    this.time = Math.max(t, this.time)
  }
  return this.sink.event(this.time, x)
}

Transformer.prototype['@@transducer/result'] = Transformer.prototype.result = function (x) {
  return this.sink.end(this.time, x)
}

/**
* Given an object supporting the new or legacy transducer protocol,
* create an adapter for it.
* @param {object} tx transform
* @returns {TxAdapter|LegacyTxAdapter}
*/
function getTxHandler (tx) {
  return typeof tx['@@transducer/step'] === 'function'
    ? new TxAdapter(tx)
    : new LegacyTxAdapter(tx)
}

/**
* Adapter for new official transducer protocol
* @param {object} tx transform
* @constructor
*/
function TxAdapter (tx) {
  this.tx = tx
}

TxAdapter.prototype.step = function (t, x) {
  return this.tx['@@transducer/step'](t, x)
}
TxAdapter.prototype.result = function (x) {
  return this.tx['@@transducer/result'](x)
}
TxAdapter.prototype.isReduced = function (x) {
  return x != null && x['@@transducer/reduced']
}
TxAdapter.prototype.getResult = function (x) {
  return x['@@transducer/value']
}

/**
* Adapter for older transducer protocol
* @param {object} tx transform
* @constructor
*/
function LegacyTxAdapter (tx) {
  this.tx = tx
}

LegacyTxAdapter.prototype.step = function (t, x) {
  return this.tx.step(t, x)
}
LegacyTxAdapter.prototype.result = function (x) {
  return this.tx.result(x)
}
LegacyTxAdapter.prototype.isReduced = function (x) {
  return x != null && x.__transducers_reduced__
}
LegacyTxAdapter.prototype.getResult = function (x) {
  return x.value
}


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transform__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__source_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sink_Pipe__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sink_IndexSink__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__disposable_dispose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__most_prelude__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__invoke__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Queue__ = __webpack_require__(91);
/* unused harmony export zip */
/* harmony export (immutable) */ exports["a"] = zipArray;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */











var map = __WEBPACK_IMPORTED_MODULE_6__most_prelude__["a" /* map */]
var tail = __WEBPACK_IMPORTED_MODULE_6__most_prelude__["g" /* tail */]

/**
 * Combine streams pairwise (or tuple-wise) by index by applying f to values
 * at corresponding indices.  The returned stream ends when any of the input
 * streams ends.
 * @param {function} f function to combine values
 * @returns {Stream} new stream with items at corresponding indices combined
 *  using f
 */
function zip (f /*, ...streams */) {
  return zipArray(f, tail(arguments))
}

/**
* Combine streams pairwise (or tuple-wise) by index by applying f to values
* at corresponding indices.  The returned stream ends when any of the input
* streams ends.
* @param {function} f function to combine values
* @param {[Stream]} streams streams to zip using f
* @returns {Stream} new stream with items at corresponding indices combined
*  using f
*/
function zipArray (f, streams) {
  return streams.length === 0 ? __WEBPACK_IMPORTED_MODULE_2__source_core__["b" /* empty */]()
: streams.length === 1 ? __WEBPACK_IMPORTED_MODULE_1__transform__["b" /* map */](f, streams[0])
: new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new Zip(f, map(getSource, streams)))
}

function getSource (stream) {
  return stream.source
}

function Zip (f, sources) {
  this.f = f
  this.sources = sources
}

Zip.prototype.run = function (sink, scheduler) {
  var l = this.sources.length
  var disposables = new Array(l)
  var sinks = new Array(l)
  var buffers = new Array(l)

  var zipSink = new ZipSink(this.f, buffers, sinks, sink)

  for (var indexSink, i = 0; i < l; ++i) {
    buffers[i] = new __WEBPACK_IMPORTED_MODULE_8__Queue__["a" /* default */]()
    indexSink = sinks[i] = new __WEBPACK_IMPORTED_MODULE_4__sink_IndexSink__["a" /* default */](i, zipSink)
    disposables[i] = this.sources[i].run(indexSink, scheduler)
  }

  return __WEBPACK_IMPORTED_MODULE_5__disposable_dispose__["d" /* all */](disposables)
}

function ZipSink (f, buffers, sinks, sink) {
  this.f = f
  this.sinks = sinks
  this.sink = sink
  this.buffers = buffers
}

ZipSink.prototype.event = function (t, indexedValue) { // eslint-disable-line complexity
  var buffers = this.buffers
  var buffer = buffers[indexedValue.index]

  buffer.push(indexedValue.value)

  if (buffer.length() === 1) {
    if (!ready(this.buffers)) {
      return
    }

    emitZipped(this.f, t, buffers, this.sink)

    if (ended(this.buffers, this.sinks)) {
      this.sink.end(t, void 0)
    }
  }
}

ZipSink.prototype.end = function (t, indexedValue) {
  var buffer = this.buffers[indexedValue.index]
  if (buffer.isEmpty()) {
    this.sink.end(t, indexedValue.value)
  }
}

ZipSink.prototype.error = __WEBPACK_IMPORTED_MODULE_3__sink_Pipe__["a" /* default */].prototype.error

function emitZipped (f, t, buffers, sink) {
  sink.event(t, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__invoke__["a" /* default */])(f, map(head, buffers)))
}

function head (buffer) {
  return buffer.shift()
}

function ended (buffers, sinks) {
  for (var i = 0, l = buffers.length; i < l; ++i) {
    if (buffers[i].isEmpty() && !sinks[i].active) {
      return true
    }
  }
  return false
}

function ready (buffers) {
  for (var i = 0, l = buffers.length; i < l; ++i) {
    if (buffers[i].isEmpty()) {
      return false
    }
  }
  return true
}


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = Disposable;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

/**
 * Create a new Disposable which will dispose its underlying resource.
 * @param {function} dispose function
 * @param {*?} data any data to be passed to disposer function
 * @constructor
 */
function Disposable (dispose, data) {
  this._dispose = dispose
  this._data = data
}

Disposable.prototype.dispose = function () {
  return this._dispose(this._data)
}


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = SettableDisposable;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

function SettableDisposable () {
  this.disposable = void 0
  this.disposed = false
  this._resolve = void 0

  var self = this
  this.result = new Promise(function (resolve) {
    self._resolve = resolve
  })
}

SettableDisposable.prototype.setDisposable = function (disposable) {
  if (this.disposable !== void 0) {
    throw new Error('setDisposable called more than once')
  }

  this.disposable = disposable

  if (this.disposed) {
    this._resolve(disposable.dispose())
  }
}

SettableDisposable.prototype.dispose = function () {
  if (this.disposed) {
    return this.result
  }

  this.disposed = true

  if (this.disposable !== void 0) {
    this.result = this.disposable.dispose()
  }

  return this.result
}


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sink_Pipe__ = __webpack_require__(3);
/* harmony export (immutable) */ exports["a"] = FilterMap;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */



function FilterMap (p, f, source) {
  this.p = p
  this.f = f
  this.source = source
}

FilterMap.prototype.run = function (sink, scheduler) {
  return this.source.run(new FilterMapSink(this.p, this.f, sink), scheduler)
}

function FilterMapSink (p, f, sink) {
  this.p = p
  this.f = f
  this.sink = sink
}

FilterMapSink.prototype.event = function (t, x) {
  var f = this.f
  var p = this.p
  p(x) && this.sink.event(t, f(x))
}

FilterMapSink.prototype.end = __WEBPACK_IMPORTED_MODULE_0__sink_Pipe__["a" /* default */].prototype.end
FilterMapSink.prototype.error = __WEBPACK_IMPORTED_MODULE_0__sink_Pipe__["a" /* default */].prototype.error


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__disposable_dispose__ = __webpack_require__(2);
/* harmony export (immutable) */ exports["a"] = fromObservable;
/* unused harmony export ObservableSource */
/* unused harmony export SubscriberSink */
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */




function fromObservable (observable) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new ObservableSource(observable))
}

function ObservableSource (observable) {
  this.observable = observable
}

ObservableSource.prototype.run = function (sink, scheduler) {
  var sub = this.observable.subscribe(new SubscriberSink(sink, scheduler))
  if (typeof sub === 'function') {
    return __WEBPACK_IMPORTED_MODULE_1__disposable_dispose__["a" /* create */](sub)
  } else if (sub && typeof sub.unsubscribe === 'function') {
    return __WEBPACK_IMPORTED_MODULE_1__disposable_dispose__["a" /* create */](unsubscribe, sub)
  }

  throw new TypeError('Observable returned invalid subscription ' + String(sub))
}

function SubscriberSink (sink, scheduler) {
  this.sink = sink
  this.scheduler = scheduler
}

SubscriberSink.prototype.next = function (x) {
  this.sink.event(this.scheduler.now(), x)
}

SubscriberSink.prototype.complete = function (x) {
  this.sink.end(this.scheduler.now(), x)
}

SubscriberSink.prototype.error = function (e) {
  this.sink.error(this.scheduler.now(), e)
}

function unsubscribe (subscription) {
  return subscription.unsubscribe()
}


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_symbol_observable__ = __webpack_require__(43);
/* harmony export (immutable) */ exports["a"] = getObservable;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */



function getObservable (o) { // eslint-disable-line complexity
  var obs = null
  if (o) {
  // Access foreign method only once
    var method = o[__WEBPACK_IMPORTED_MODULE_0_symbol_observable__["a" /* default */]]
    if (typeof method === 'function') {
      obs = method.call(o)
      if (!(obs && typeof obs.subscribe === 'function')) {
        throw new TypeError('invalid observable ' + obs)
      }
    }
  }

  return obs
}


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_defaultScheduler__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__disposable_dispose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fatalError__ = __webpack_require__(16);
/* harmony export (immutable) */ exports["a"] = subscribe;
/* unused harmony export SubscribeObserver */
/* unused harmony export Subscription */
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */





function subscribe (subscriber, stream) {
  if (subscriber == null || typeof subscriber !== 'object') {
    throw new TypeError('subscriber must be an object')
  }

  var disposable = __WEBPACK_IMPORTED_MODULE_1__disposable_dispose__["c" /* settable */]()
  var observer = new SubscribeObserver(__WEBPACK_IMPORTED_MODULE_2__fatalError__["a" /* default */], subscriber, disposable)

  disposable.setDisposable(stream.source.run(observer, __WEBPACK_IMPORTED_MODULE_0__scheduler_defaultScheduler__["a" /* default */]))

  return new Subscription(disposable)
}

function SubscribeObserver (fatalError, subscriber, disposable) {
  this.fatalError = fatalError
  this.subscriber = subscriber
  this.disposable = disposable
}

SubscribeObserver.prototype.event = function (t, x) {
  if (!this.disposable.disposed && typeof this.subscriber.next === 'function') {
    this.subscriber.next(x)
  }
}

SubscribeObserver.prototype.end = function (t, x) {
  var s = this.subscriber
  doDispose(this.fatalError, s, s.complete, s.error, this.disposable, x)
}

SubscribeObserver.prototype.error = function (t, e) {
  var s = this.subscriber
  doDispose(this.fatalError, s, s.error, s.error, this.disposable, e)
}

function Subscription (disposable) {
  this.disposable = disposable
}

Subscription.prototype.unsubscribe = function () {
  this.disposable.dispose()
}

function doDispose (fatal, subscriber, complete, error, disposable, x) {
  Promise.resolve(disposable.dispose()).then(function () {
    if (typeof complete === 'function') {
      complete.call(subscriber, x)
    }
  }).catch(function (e) {
    if (typeof error === 'function') {
      error.call(subscriber, e)
    }
  }).catch(fatal)
}


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__task__ = __webpack_require__(22);
/* harmony export (immutable) */ exports["a"] = ClockTimer;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */



/*global setTimeout, clearTimeout*/

function ClockTimer () {}

ClockTimer.prototype.now = Date.now

ClockTimer.prototype.setTimer = function (f, dt) {
  return dt <= 0 ? runAsap(f) : setTimeout(f, dt)
}

ClockTimer.prototype.clearTimer = function (t) {
  return t instanceof Asap ? t.cancel() : clearTimeout(t)
}

function Asap (f) {
  this.f = f
  this.active = true
}

Asap.prototype.run = function () {
  return this.active && this.f()
}

Asap.prototype.error = function (e) {
  throw e
}

Asap.prototype.cancel = function () {
  this.active = false
}

function runAsap (f) {
  var task = new Asap(f)
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__task__["b" /* defer */])(task)
  return task
}


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = ScheduledTask;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

function ScheduledTask (delay, period, task, scheduler) {
  this.time = delay
  this.period = period
  this.task = task
  this.scheduler = scheduler
  this.active = true
}

ScheduledTask.prototype.run = function () {
  return this.task.run(this.time)
}

ScheduledTask.prototype.error = function (e) {
  return this.task.error(this.time, e)
}

ScheduledTask.prototype.dispose = function () {
  this.scheduler.cancel(this)
  return this.task.dispose()
}


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ScheduledTask__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task__ = __webpack_require__(22);
/* harmony export (immutable) */ exports["a"] = Scheduler;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */




function Scheduler (timer, timeline) {
  this.timer = timer
  this.timeline = timeline

  this._timer = null
  this._nextArrival = Infinity

  var self = this
  this._runReadyTasksBound = function () {
    self._runReadyTasks(self.now())
  }
}

Scheduler.prototype.now = function () {
  return this.timer.now()
}

Scheduler.prototype.asap = function (task) {
  return this.schedule(0, -1, task)
}

Scheduler.prototype.delay = function (delay, task) {
  return this.schedule(delay, -1, task)
}

Scheduler.prototype.periodic = function (period, task) {
  return this.schedule(0, period, task)
}

Scheduler.prototype.schedule = function (delay, period, task) {
  var now = this.now()
  var st = new __WEBPACK_IMPORTED_MODULE_0__ScheduledTask__["a" /* default */](now + Math.max(0, delay), period, task, this)

  this.timeline.add(st)
  this._scheduleNextRun(now)
  return st
}

Scheduler.prototype.cancel = function (task) {
  task.active = false
  if (this.timeline.remove(task)) {
    this._reschedule()
  }
}

Scheduler.prototype.cancelAll = function (f) {
  this.timeline.removeAll(f)
  this._reschedule()
}

Scheduler.prototype._reschedule = function () {
  if (this.timeline.isEmpty()) {
    this._unschedule()
  } else {
    this._scheduleNextRun(this.now())
  }
}

Scheduler.prototype._unschedule = function () {
  this.timer.clearTimer(this._timer)
  this._timer = null
}

Scheduler.prototype._scheduleNextRun = function (now) { // eslint-disable-line complexity
  if (this.timeline.isEmpty()) {
    return
  }

  var nextArrival = this.timeline.nextArrival()

  if (this._timer === null) {
    this._scheduleNextArrival(nextArrival, now)
  } else if (nextArrival < this._nextArrival) {
    this._unschedule()
    this._scheduleNextArrival(nextArrival, now)
  }
}

Scheduler.prototype._scheduleNextArrival = function (nextArrival, now) {
  this._nextArrival = nextArrival
  var delay = Math.max(0, nextArrival - now)
  this._timer = this.timer.setTimer(this._runReadyTasksBound, delay)
}

Scheduler.prototype._runReadyTasks = function (now) {
  this._timer = null
  this.timeline.runTasks(now, __WEBPACK_IMPORTED_MODULE_1__task__["a" /* runTask */])
  this._scheduleNextRun(this.now())
}


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__most_prelude__ = __webpack_require__(1);
/* harmony export (immutable) */ exports["a"] = Timeline;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */



function Timeline () {
  this.tasks = []
}

Timeline.prototype.nextArrival = function () {
  return this.isEmpty() ? Infinity : this.tasks[0].time
}

Timeline.prototype.isEmpty = function () {
  return this.tasks.length === 0
}

Timeline.prototype.add = function (st) {
  insertByTime(st, this.tasks)
}

Timeline.prototype.remove = function (st) {
  var i = binarySearch(st.time, this.tasks)

  if (i >= 0 && i < this.tasks.length) {
    var at = __WEBPACK_IMPORTED_MODULE_0__most_prelude__["d" /* findIndex */](st, this.tasks[i].events)
    if (at >= 0) {
      this.tasks[i].events.splice(at, 1)
      return true
    }
  }

  return false
}

Timeline.prototype.removeAll = function (f) {
  for (var i = 0, l = this.tasks.length; i < l; ++i) {
    removeAllFrom(f, this.tasks[i])
  }
}

Timeline.prototype.runTasks = function (t, runTask) {
  var tasks = this.tasks
  var l = tasks.length
  var i = 0

  while (i < l && tasks[i].time <= t) {
    ++i
  }

  this.tasks = tasks.slice(i)

  // Run all ready tasks
  for (var j = 0; j < i; ++j) {
    this.tasks = runTasks(runTask, tasks[j], this.tasks)
  }
}

function runTasks (runTask, timeslot, tasks) { // eslint-disable-line complexity
  var events = timeslot.events
  for (var i = 0; i < events.length; ++i) {
    var task = events[i]

    if (task.active) {
      runTask(task)

      // Reschedule periodic repeating tasks
      // Check active again, since a task may have canceled itself
      if (task.period >= 0 && task.active) {
        task.time = task.time + task.period
        insertByTime(task, tasks)
      }
    }
  }

  return tasks
}

function insertByTime (task, timeslots) { // eslint-disable-line complexity
  var l = timeslots.length

  if (l === 0) {
    timeslots.push(newTimeslot(task.time, [task]))
    return
  }

  var i = binarySearch(task.time, timeslots)

  if (i >= l) {
    timeslots.push(newTimeslot(task.time, [task]))
  } else if (task.time === timeslots[i].time) {
    timeslots[i].events.push(task)
  } else {
    timeslots.splice(i, 0, newTimeslot(task.time, [task]))
  }
}

function removeAllFrom (f, timeslot) {
  timeslot.events = __WEBPACK_IMPORTED_MODULE_0__most_prelude__["e" /* removeAll */](f, timeslot.events)
}

function binarySearch (t, sortedArray) { // eslint-disable-line complexity
  var lo = 0
  var hi = sortedArray.length
  var mid, y

  while (lo < hi) {
    mid = Math.floor((lo + hi) / 2)
    y = sortedArray[mid]

    if (t === y.time) {
      return mid
    } else if (t < y.time) {
      hi = mid
    } else {
      lo = mid + 1
    }
  }
  return hi
}

function newTimeslot (t, events) {
  return { time: t, events: events }
}


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__task__ = __webpack_require__(22);
/* harmony export (immutable) */ exports["a"] = DeferredSink;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */



function DeferredSink (sink) {
  this.sink = sink
  this.events = []
  this.active = true
}

DeferredSink.prototype.event = function (t, x) {
  if (!this.active) {
    return
  }

  if (this.events.length === 0) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__task__["b" /* defer */])(new PropagateAllTask(this.sink, t, this.events))
  }

  this.events.push({ time: t, value: x })
}

DeferredSink.prototype.end = function (t, x) {
  if (!this.active) {
    return
  }

  this._end(new EndTask(t, x, this.sink))
}

DeferredSink.prototype.error = function (t, e) {
  this._end(new ErrorTask(t, e, this.sink))
}

DeferredSink.prototype._end = function (task) {
  this.active = false
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__task__["b" /* defer */])(task)
}

function PropagateAllTask (sink, time, events) {
  this.sink = sink
  this.events = events
  this.time = time
}

PropagateAllTask.prototype.run = function () {
  var events = this.events
  var sink = this.sink
  var event

  for (var i = 0, l = events.length; i < l; ++i) {
    event = events[i]
    this.time = event.time
    sink.event(event.time, event.value)
  }

  events.length = 0
}

PropagateAllTask.prototype.error = function (e) {
  this.sink.error(this.time, e)
}

function EndTask (t, x, sink) {
  this.time = t
  this.value = x
  this.sink = sink
}

EndTask.prototype.run = function () {
  this.sink.end(this.time, this.value)
}

EndTask.prototype.error = function (e) {
  this.sink.error(this.time, e)
}

function ErrorTask (t, e, sink) {
  this.time = t
  this.value = e
  this.sink = sink
}

ErrorTask.prototype.run = function () {
  this.sink.error(this.time, this.value)
}

ErrorTask.prototype.error = function (e) {
  throw e
}


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = SafeSink;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

function SafeSink (sink) {
  this.sink = sink
  this.active = true
}

SafeSink.prototype.event = function (t, x) {
  if (!this.active) {
    return
  }
  this.sink.event(t, x)
}

SafeSink.prototype.end = function (t, x) {
  if (!this.active) {
    return
  }
  this.disable()
  this.sink.end(t, x)
}

SafeSink.prototype.error = function (t, e) {
  this.disable()
  this.sink.error(t, e)
}

SafeSink.prototype.disable = function () {
  this.active = false
  return this.sink
}


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sink_DeferredSink__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__disposable_dispose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tryEvent__ = __webpack_require__(21);
/* harmony export (immutable) */ exports["a"] = EventEmitterSource;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */





function EventEmitterSource (event, source) {
  this.event = event
  this.source = source
}

EventEmitterSource.prototype.run = function (sink, scheduler) {
  // NOTE: Because EventEmitter allows events in the same call stack as
  // a listener is added, use a DeferredSink to buffer events
  // until the stack clears, then propagate.  This maintains most.js's
  // invariant that no event will be delivered in the same call stack
  // as an observer begins observing.
  var dsink = new __WEBPACK_IMPORTED_MODULE_0__sink_DeferredSink__["a" /* default */](sink)

  function addEventVariadic (a) {
    var l = arguments.length
    if (l > 1) {
      var arr = new Array(l)
      for (var i = 0; i < l; ++i) {
        arr[i] = arguments[i]
      }
      __WEBPACK_IMPORTED_MODULE_2__tryEvent__["a" /* tryEvent */](scheduler.now(), arr, dsink)
    } else {
      __WEBPACK_IMPORTED_MODULE_2__tryEvent__["a" /* tryEvent */](scheduler.now(), a, dsink)
    }
  }

  this.source.addListener(this.event, addEventVariadic)

  return __WEBPACK_IMPORTED_MODULE_1__disposable_dispose__["a" /* create */](disposeEventEmitter, { target: this, addEvent: addEventVariadic })
}

function disposeEventEmitter (info) {
  var target = info.target
  target.source.removeListener(target.event, info.addEvent)
}


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__disposable_dispose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tryEvent__ = __webpack_require__(21);
/* harmony export (immutable) */ exports["a"] = EventTargetSource;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */




function EventTargetSource (event, source, capture) {
  this.event = event
  this.source = source
  this.capture = capture
}

EventTargetSource.prototype.run = function (sink, scheduler) {
  function addEvent (e) {
    __WEBPACK_IMPORTED_MODULE_1__tryEvent__["a" /* tryEvent */](scheduler.now(), e, sink)
  }

  this.source.addEventListener(this.event, addEvent, this.capture)

  return __WEBPACK_IMPORTED_MODULE_0__disposable_dispose__["a" /* create */](disposeEventTarget,
    { target: this, addEvent: addEvent })
}

function disposeEventTarget (info) {
  var target = info.target
  target.source.removeEventListener(target.event, info.addEvent, target.capture)
}


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fromArray__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__iterable__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fromIterable__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__observable_getObservable__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__observable_fromObservable__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__most_prelude__ = __webpack_require__(1);
/* harmony export (immutable) */ exports["a"] = from;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */









function from (a) { // eslint-disable-line complexity
  if (a instanceof __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */]) {
    return a
  }

  var observable = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__observable_getObservable__["a" /* default */])(a)
  if (observable != null) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__observable_fromObservable__["a" /* fromObservable */])(observable)
  }

  if (Array.isArray(a) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__most_prelude__["c" /* isArrayLike */])(a)) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__fromArray__["a" /* fromArray */])(a)
  }

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__iterable__["b" /* isIterable */])(a)) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__fromIterable__["a" /* fromIterable */])(a)
  }

  throw new TypeError('from(x) must be observable, iterable, or array-like: ' + a)
}


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduler_PropagateTask__ = __webpack_require__(5);
/* harmony export (immutable) */ exports["a"] = fromArray;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */




function fromArray (a) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new ArraySource(a))
}

function ArraySource (a) {
  this.array = a
}

ArraySource.prototype.run = function (sink, scheduler) {
  return scheduler.asap(new __WEBPACK_IMPORTED_MODULE_1__scheduler_PropagateTask__["a" /* default */](runProducer, this.array, sink))
}

function runProducer (t, array, sink) {
  for (var i = 0, l = array.length; i < l && this.active; ++i) {
    sink.event(t, array[i])
  }

  this.active && end(t)

  function end (t) {
    sink.end(t)
  }
}


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EventTargetSource__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EventEmitterSource__ = __webpack_require__(124);
/* unused harmony export fromEvent */
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */





/**
 * Create a stream from an EventTarget, such as a DOM Node, or EventEmitter.
 * @param {String} event event type name, e.g. 'click'
 * @param {EventTarget|EventEmitter} source EventTarget or EventEmitter
 * @param {*?} capture for DOM events, whether to use
 *  capturing--passed as 3rd parameter to addEventListener.
 * @returns {Stream} stream containing all events of the specified type
 * from the source.
 */
function fromEvent (event, source, capture) { // eslint-disable-line complexity
  var s

  if (typeof source.addEventListener === 'function' && typeof source.removeEventListener === 'function') {
    if (arguments.length < 3) {
      capture = false
    }

    s = new __WEBPACK_IMPORTED_MODULE_1__EventTargetSource__["a" /* default */](event, source, capture)
  } else if (typeof source.addListener === 'function' && typeof source.removeListener === 'function') {
    s = new __WEBPACK_IMPORTED_MODULE_2__EventEmitterSource__["a" /* default */](event, source)
  } else {
    throw new Error('source must support addEventListener/removeEventListener or addListener/removeListener')
  }

  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](s)
}


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__iterable__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scheduler_PropagateTask__ = __webpack_require__(5);
/* harmony export (immutable) */ exports["a"] = fromIterable;
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */





function fromIterable (iterable) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new IterableSource(iterable))
}

function IterableSource (iterable) {
  this.iterable = iterable
}

IterableSource.prototype.run = function (sink, scheduler) {
  return new IteratorProducer(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__iterable__["a" /* getIterator */])(this.iterable), sink, scheduler)
}

function IteratorProducer (iterator, sink, scheduler) {
  this.scheduler = scheduler
  this.iterator = iterator
  this.task = new __WEBPACK_IMPORTED_MODULE_2__scheduler_PropagateTask__["a" /* default */](runProducer, this, sink)
  scheduler.asap(this.task)
}

IteratorProducer.prototype.dispose = function () {
  return this.task.dispose()
}

function runProducer (t, producer, sink) {
  var x = producer.iterator.next()
  if (x.done) {
    sink.end(t, x.value)
  } else {
    sink.event(t, x.value)
  }

  producer.scheduler.asap(producer.task)
}


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__most_prelude__ = __webpack_require__(1);
/* unused harmony export generate */
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */




/**
 * Compute a stream using an *async* generator, which yields promises
 * to control event times.
 * @param f
 * @returns {Stream}
 */
function generate (f /*, ...args */) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new GenerateSource(f, __WEBPACK_IMPORTED_MODULE_1__most_prelude__["g" /* tail */](arguments)))
}

function GenerateSource (f, args) {
  this.f = f
  this.args = args
}

GenerateSource.prototype.run = function (sink, scheduler) {
  return new Generate(this.f.apply(void 0, this.args), sink, scheduler)
}

function Generate (iterator, sink, scheduler) {
  this.iterator = iterator
  this.sink = sink
  this.scheduler = scheduler
  this.active = true

  var self = this
  function err (e) {
    self.sink.error(self.scheduler.now(), e)
  }

  Promise.resolve(this).then(next).catch(err)
}

function next (generate, x) {
  return generate.active ? handle(generate, generate.iterator.next(x)) : x
}

function handle (generate, result) {
  if (result.done) {
    return generate.sink.end(generate.scheduler.now(), result.value)
  }

  return Promise.resolve(result.value).then(function (x) {
    return emit(generate, x)
  }, function (e) {
    return error(generate, e)
  })
}

function emit (generate, x) {
  generate.sink.event(generate.scheduler.now(), x)
  return next(generate, x)
}

function error (generate, e) {
  return handle(generate, generate.iterator.throw(e))
}

Generate.prototype.dispose = function () {
  this.active = false
}


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* unused harmony export iterate */
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */



/**
 * Compute a stream by iteratively calling f to produce values
 * Event times may be controlled by returning a Promise from f
 * @param {function(x:*):*|Promise<*>} f
 * @param {*} x initial value
 * @returns {Stream}
 */
function iterate (f, x) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new IterateSource(f, x))
}

function IterateSource (f, x) {
  this.f = f
  this.value = x
}

IterateSource.prototype.run = function (sink, scheduler) {
  return new Iterate(this.f, this.value, sink, scheduler)
}

function Iterate (f, initial, sink, scheduler) {
  this.f = f
  this.sink = sink
  this.scheduler = scheduler
  this.active = true

  var x = initial

  var self = this
  function err (e) {
    self.sink.error(self.scheduler.now(), e)
  }

  function start (iterate) {
    return stepIterate(iterate, x)
  }

  Promise.resolve(this).then(start).catch(err)
}

Iterate.prototype.dispose = function () {
  this.active = false
}

function stepIterate (iterate, x) {
  iterate.sink.event(iterate.scheduler.now(), x)

  if (!iterate.active) {
    return x
  }

  var f = iterate.f
  return Promise.resolve(f(x)).then(function (y) {
    return continueIterate(iterate, y)
  })
}

function continueIterate (iterate, x) {
  return !iterate.active ? iterate.value : stepIterate(iterate, x)
}


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduler_PropagateTask__ = __webpack_require__(5);
/* unused harmony export periodic */
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */




/**
 * Create a stream that emits the current time periodically
 * @param {Number} period periodicity of events in millis
 * @param {*} value value to emit each period
 * @returns {Stream} new stream that emits the current time every period
 */
function periodic (period, value) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new Periodic(period, value))
}

function Periodic (period, value) {
  this.period = period
  this.value = value
}

Periodic.prototype.run = function (sink, scheduler) {
  return scheduler.periodic(this.period, __WEBPACK_IMPORTED_MODULE_1__scheduler_PropagateTask__["a" /* default */].event(this.value, sink))
}


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stream__ = __webpack_require__(0);
/* unused harmony export unfold */
/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */



/**
 * Compute a stream by unfolding tuples of future values from a seed value
 * Event times may be controlled by returning a Promise from f
 * @param {function(seed:*):{value:*, seed:*, done:boolean}|Promise<{value:*, seed:*, done:boolean}>} f unfolding function accepts
 *  a seed and returns a new tuple with a value, new seed, and boolean done flag.
 *  If tuple.done is true, the stream will end.
 * @param {*} seed seed value
 * @returns {Stream} stream containing all value of all tuples produced by the
 *  unfolding function.
 */
function unfold (f, seed) {
  return new __WEBPACK_IMPORTED_MODULE_0__Stream__["a" /* default */](new UnfoldSource(f, seed))
}

function UnfoldSource (f, seed) {
  this.f = f
  this.value = seed
}

UnfoldSource.prototype.run = function (sink, scheduler) {
  return new Unfold(this.f, this.value, sink, scheduler)
}

function Unfold (f, x, sink, scheduler) {
  this.f = f
  this.sink = sink
  this.scheduler = scheduler
  this.active = true

  var self = this
  function err (e) {
    self.sink.error(self.scheduler.now(), e)
  }

  function start (unfold) {
    return stepUnfold(unfold, x)
  }

  Promise.resolve(this).then(start).catch(err)
}

Unfold.prototype.dispose = function () {
  this.active = false
}

function stepUnfold (unfold, x) {
  var f = unfold.f
  return Promise.resolve(f(x)).then(function (tuple) {
    return continueUnfold(unfold, tuple)
  })
}

function continueUnfold (unfold, tuple) {
  if (tuple.done) {
    unfold.sink.end(unfold.scheduler.now(), tuple.value)
    return tuple.value
  }

  unfold.sink.event(unfold.scheduler.now(), tuple.value)

  if (!unfold.active) {
    return tuple.value
  }
  return stepUnfold(unfold, tuple.seed)
}


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BrowserSource; });
var BrowserSource = (function () {
    function BrowserSource() {
    }
    BrowserSource.prototype.push = function (path, state) {
        if (state === void 0) { state = {}; }
        window.history.pushState(state, createKey(), path);
        return getCurrentLocation();
    };
    BrowserSource.prototype.replace = function (path, state) {
        if (state === void 0) { state = {}; }
        window.history.replaceState(state, createKey(), path);
        return getCurrentLocation();
    };
    BrowserSource.prototype.go = function (amount) {
        if (amount !== 0)
            window.history.go(amount);
        return getCurrentLocation();
    };
    return BrowserSource;
}());

function getCurrentLocation() {
    return {
        path: location.pathname,
        state: history.state,
        hash: location.hash,
        queries: parseQueryString(location.search),
    };
}
function createKey() {
    return Math.random().toString(36).substr(2, 6);
}
function parseQueryString(queryString) {
    var queryStrings = queryString.substring(1).split('&');
    return queryStrings
        .reduce(function (queries, query) {
        var _a = query.split('='), queryName = _a[0], queryValue = _a[1];
        queries[queryName] = queryValue;
        return queries;
    }, {});
}
//# sourceMappingURL=BrowserSource.js.map

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ServerSource; });
var initialLocation = {
    path: '/',
    hash: '',
    state: {},
    queries: {},
};
var ServerSource = (function () {
    function ServerSource() {
        this.locations = [initialLocation];
        this.position = 0;
    }
    ServerSource.prototype.push = function (path, state) {
        if (state === void 0) { state = {}; }
        ++this.position;
        var location = createLocation(path, state);
        this.locations[this.position] = location;
        return location;
    };
    ServerSource.prototype.replace = function (path, state) {
        if (state === void 0) { state = {}; }
        var location = createLocation(path, state);
        this.locations[this.position] = location;
        return location;
    };
    ServerSource.prototype.go = function (amount) {
        var count = this.locations.length;
        var position = this.position;
        var newPosition = position + amount;
        if (newPosition >= count)
            this.position = count - 1;
        else if (newPosition < 0)
            this.position = 0;
        else
            this.position = newPosition;
        return this.locations[this.position];
    };
    return ServerSource;
}());

function createLocation(path, state) {
    return {
        path: path,
        state: state,
        hash: '',
        queries: {},
    };
}
//# sourceMappingURL=ServerSource.js.map

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_most__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_most_subject__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BrowserSource__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ServerSource__ = __webpack_require__(135);
/* harmony export (immutable) */ exports["a"] = createHistory;




function createHistory() {
    var holdSource = new __WEBPACK_IMPORTED_MODULE_1_most_subject__["HoldSubjectSource"](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["b" /* never */])().source, 1);
    var historySource = inBrowser() ? new __WEBPACK_IMPORTED_MODULE_2__BrowserSource__["a" /* BrowserSource */]() : new __WEBPACK_IMPORTED_MODULE_3__ServerSource__["a" /* ServerSource */]();
    var history = new __WEBPACK_IMPORTED_MODULE_0_most__["c" /* Stream */](holdSource).startWith(historySource.go(0));
    function event(location) {
        __WEBPACK_IMPORTED_MODULE_0_most__["a" /* defaultScheduler */].asap(__WEBPACK_IMPORTED_MODULE_0_most__["d" /* PropagateTask */].event(location, holdSource));
    }
    function push(path, state) {
        if (state === void 0) { state = {}; }
        event(historySource.push(path, state));
    }
    function replace(path, state) {
        if (state === void 0) { state = {}; }
        event(historySource.replace(path, state));
    }
    function go(amount) {
        event(historySource.go(amount));
    }
    return { push: push, replace: replace, go: go, history: history };
}
function inBrowser() {
    try {
        return window && window.history;
    }
    catch (e) {
        return false;
    }
}
//# sourceMappingURL=history.js.map

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__history__ = __webpack_require__(136);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__history__["a"]; });

//# sourceMappingURL=index.js.map

/***/ },
/* 138 */
/***/ function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(140);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function switchPathInputGuard(path, routes) {
  if (!(0, _util.isPattern)(path)) {
    throw new Error('First parameter to switchPath must be a route path.');
  }
  if (!(0, _util.isRouteDefinition)(routes)) {
    throw new Error('Second parameter to switchPath must be an object ' + 'containing route patterns.');
  }
}

function validatePath(sourcePath, matchedPath) {
  var sourceParts = (0, _util.splitPath)(sourcePath);
  var matchedParts = (0, _util.splitPath)(matchedPath);

  for (var i = 0; i < matchedParts.length; ++i) {
    if (matchedParts[i] !== sourceParts[i]) {
      return null;
    }
  }

  return '/' + (0, _util.extractPartial)(sourcePath, matchedPath);
}

function betterMatch(candidate, reference) {
  if (!(0, _util.isNotNull)(candidate)) {
    return false;
  }
  if (!(0, _util.isNotNull)(reference)) {
    return true;
  }
  if (!validatePath(candidate, reference)) {
    return false;
  }
  return candidate.length >= reference.length;
}

function matchesWithParams(sourcePath, pattern) {
  var sourceParts = (0, _util.splitPath)(sourcePath);
  var patternParts = (0, _util.splitPath)(pattern);

  var params = patternParts.map(function (part, i) {
    return (0, _util.isParam)(part) ? sourceParts[i] : null;
  }).filter(_util.isNotNull);

  var matched = patternParts.every(function (part, i) {
    return (0, _util.isParam)(part) || part === sourceParts[i];
  });

  return matched ? params : [];
}

function getParamFnValue(paramFn, params) {
  var _paramFn = (0, _util.isRouteDefinition)(paramFn) ? paramFn['/'] : paramFn;
  return typeof _paramFn === 'function' ? _paramFn.apply(undefined, _toConsumableArray(params)) : _paramFn;
}

function validate(_ref) {
  var sourcePath = _ref.sourcePath;
  var matchedPath = _ref.matchedPath;
  var matchedValue = _ref.matchedValue;
  var routes = _ref.routes;

  var path = matchedPath ? validatePath(sourcePath, matchedPath) : null;
  var value = matchedValue;
  if (!path) {
    path = routes['*'] ? sourcePath : null;
    value = path ? routes['*'] : null;
  }
  return { path: path, value: value };
}

function switchPath(sourcePath, routes) {
  switchPathInputGuard(sourcePath, routes);
  var matchedPath = null;
  var matchedValue = null;

  (0, _util.traverseRoutes)(routes, function matchPattern(pattern) {
    if (sourcePath.search(pattern) === 0 && betterMatch(pattern, matchedPath)) {
      matchedPath = pattern;
      matchedValue = routes[pattern];
    }

    var params = matchesWithParams(sourcePath, pattern).filter(Boolean);

    if (params.length > 0 && betterMatch(sourcePath, matchedPath)) {
      matchedPath = (0, _util.extractPartial)(sourcePath, pattern);
      matchedValue = getParamFnValue(routes[pattern], params);
    }

    if ((0, _util.isRouteDefinition)(routes[pattern]) && params.length === 0) {
      if (sourcePath !== '/') {
        var child = switchPath((0, _util.unprefixed)(sourcePath, pattern) || '/', routes[pattern]);
        var nestedPath = pattern + child.path;
        if (child.path !== null && betterMatch(nestedPath, matchedPath)) {
          matchedPath = nestedPath;
          matchedValue = child.value;
        }
      }
    }
  });

  return validate({ sourcePath: sourcePath, matchedPath: matchedPath, matchedValue: matchedValue, routes: routes });
}

exports.default = switchPath;

/***/ },
/* 140 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPattern = isPattern;
exports.isRouteDefinition = isRouteDefinition;
exports.traverseRoutes = traverseRoutes;
exports.isNotNull = isNotNull;
exports.splitPath = splitPath;
exports.isParam = isParam;
exports.extractPartial = extractPartial;
exports.unprefixed = unprefixed;
function isPattern(candidate) {
  return typeof candidate === "string" && (candidate.charAt(0) === "/" || candidate === "*");
}

function isRouteDefinition(candidate) {
  return !candidate || typeof candidate !== "object" ? false : isPattern(Object.keys(candidate)[0]);
}

function traverseRoutes(routes, callback) {
  var keys = Object.keys(routes);
  for (var i = 0; i < keys.length; ++i) {
    var pattern = keys[i];
    if (pattern === "*") {
      continue;
    }
    callback(pattern);
  }
}

function isNotNull(candidate) {
  return candidate !== null;
}

function splitPath(path) {
  return path.split("/").filter(function (s) {
    return !!s;
  });
}

function isParam(candidate) {
  return candidate.match(/:\w+/) !== null;
}

function extractPartial(sourcePath, pattern) {
  var patternParts = splitPath(pattern);
  var sourceParts = splitPath(sourcePath);

  var matchedParts = [];

  for (var i = 0; i < patternParts.length; ++i) {
    matchedParts.push(sourceParts[i]);
  }

  return matchedParts.filter(isNotNull).join("/");
}

function unprefixed(fullString, prefix) {
  return fullString.split(prefix)[1];
}

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_most__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__motorcycle_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__features_Button__ = __webpack_require__(143);
/* harmony export (immutable) */ exports["a"] = App;



function App(sources) {
    var button = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__features_Button__["a" /* Buttons */])(sources);
    var dom = button.dom.map(view);
    var router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["b" /* never */])();
    return { dom: dom, router: router };
}
var view = function (buttons) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__motorcycle_dom__["b" /* div */])({}, [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__motorcycle_dom__["c" /* h2 */])({}, ["Motorcycle.js Material"]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__motorcycle_dom__["d" /* h4 */])({}, 'More coming very soon!'),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__motorcycle_dom__["b" /* div */])({
            style: {
                padding: '2em',
            },
        }, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__motorcycle_dom__["c" /* h2 */])('Buttons'), buttons]),
    ]);
};


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_most__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__motorcycle_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_components__ = __webpack_require__(149);
/* harmony export (immutable) */ exports["a"] = Buttons;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



function Buttons(sources) {
    var dom = combineDoms([
        RaisedButton(sources),
        spacer(),
        FlatButton(sources),
        spacer(),
        SecondaryButton(sources),
        spacer(),
        AccentButton(sources),
        spacer(),
        RedButton(sources),
        spacer(),
        GreenButton(sources),
        spacer(),
        YellowButton(sources),
        spacer(),
        BlueButton(sources),
        spacer(),
    ]);
    return { dom: dom };
}
function spacer() {
    return {
        dom: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["j" /* just */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__motorcycle_dom__["b" /* div */])({ style: { margin: '2em' } })),
    };
}
function combineDoms(componentArray) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["i" /* combineArray */])(function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__motorcycle_dom__["b" /* div */])('.buttons', children);
    }, componentArray.map(function (c) { return c.dom; }));
}
var RaisedButton = function (sources) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_components__["a" /* Button */])(__assign({}, sources, { children$: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["j" /* just */])(['Raised']) }));
};
var FlatButton = function (sources) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_components__["a" /* Button */])(__assign({}, sources, { styles$: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["j" /* just */])([__WEBPACK_IMPORTED_MODULE_2__src_components__["a" /* Button */].flat]), children$: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["j" /* just */])(['Flat']) }));
};
var SecondaryButton = function (sources) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_components__["a" /* Button */])(__assign({}, sources, { styles$: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["j" /* just */])([__WEBPACK_IMPORTED_MODULE_2__src_components__["a" /* Button */].raised, __WEBPACK_IMPORTED_MODULE_2__src_components__["a" /* Button */].secondary]), children$: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["j" /* just */])(['Secondary']) }));
};
var AccentButton = function (sources) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_components__["a" /* Button */])(__assign({}, sources, { styles$: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["j" /* just */])([__WEBPACK_IMPORTED_MODULE_2__src_components__["a" /* Button */].raised, __WEBPACK_IMPORTED_MODULE_2__src_components__["a" /* Button */].accent]), children$: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["j" /* just */])(['Accent']) }));
};
var RedButton = function (sources) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_components__["a" /* Button */])(__assign({}, sources, { styles$: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["j" /* just */])([__WEBPACK_IMPORTED_MODULE_2__src_components__["a" /* Button */].raised, __WEBPACK_IMPORTED_MODULE_2__src_components__["a" /* Button */].red]), children$: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["j" /* just */])(['Red']) }));
};
var GreenButton = function (sources) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_components__["a" /* Button */])(__assign({}, sources, { styles$: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["j" /* just */])([__WEBPACK_IMPORTED_MODULE_2__src_components__["a" /* Button */].raised, __WEBPACK_IMPORTED_MODULE_2__src_components__["a" /* Button */].green]), children$: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["j" /* just */])(['Green']) }));
};
var YellowButton = function (sources) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_components__["a" /* Button */])(__assign({}, sources, { styles$: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["j" /* just */])([__WEBPACK_IMPORTED_MODULE_2__src_components__["a" /* Button */].raised, __WEBPACK_IMPORTED_MODULE_2__src_components__["a" /* Button */].yellow]), children$: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["j" /* just */])(['Yellow']) }));
};
var BlueButton = function (sources) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_components__["a" /* Button */])(__assign({}, sources, { styles: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["j" /* just */])([__WEBPACK_IMPORTED_MODULE_2__src_components__["a" /* Button */].raised, __WEBPACK_IMPORTED_MODULE_2__src_components__["a" /* Button */].blue]), children$: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["j" /* just */])(['Blue']) }));
};


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_helpers__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__colors__ = __webpack_require__(44);
/* unused harmony export serif */
/* unused harmony export sans */
/* unused harmony export fontSmall */
/* unused harmony export fontMed */
/* unused harmony export fontBig */
/* unused harmony export fontHuge */
/* unused harmony export lineHeight */
/* harmony export (binding) */ __webpack_require__.d(exports, "i", function() { return primary; });
/* harmony export (binding) */ __webpack_require__.d(exports, "g", function() { return secondary; });
/* harmony export (binding) */ __webpack_require__.d(exports, "j", function() { return accent; });
/* harmony export (binding) */ __webpack_require__.d(exports, "h", function() { return bodyBackground; });
/* unused harmony export gridColumns */
/* unused harmony export boxShadowCard */
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return boxShadowFloat; });
/* unused harmony export boxShadowFloatHover */
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return boxShadowRaised; });
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return boxShadowRaisedHover; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return cubic; });
/* unused harmony export borderRadiusSmall */
/* unused harmony export borderRadiusMed */
/* unused harmony export borderRadiusBig */
/* unused harmony export spaceBig */
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return spaceMed; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return spaceSmall; });
/* unused harmony export mediaMed */
/* unused harmony export mediaSmall */
/* unused harmony export mediaTiny */


var serif = "'Gentium Book Basic', serif";
var sans = "Roboto, sans-serif;";
var fontSmall = "12px";
var fontMed = "16px";
var fontBig = "22px";
var fontHuge = "40px";
var lineHeight = "130%";
// Colors
var primary = "" + __WEBPACK_IMPORTED_MODULE_1__colors__["a" /* turqoise */];
var secondary = "" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__css_helpers__["a" /* shadeColor */])(primary, 10);
var accent = "" + __WEBPACK_IMPORTED_MODULE_1__colors__["b" /* yellow */];
var bodyBackground = "" + __WEBPACK_IMPORTED_MODULE_1__colors__["c" /* paper */];
// Grid
var gridColumns = "12";
// Decorative
var boxShadowCard = "0 2px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 10px 0 rgba(0, 0, 0, 0.09)";
var boxShadowFloat = "0 2 px 5 px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)";
var boxShadowFloatHover = "0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15)";
var boxShadowRaised = "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)";
var boxShadowRaisedHover = "0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15)";
var cubic = "cubic-bezier(.64,.09,.08,1)";
var borderRadiusSmall = "3px";
var borderRadiusMed = "6px";
var borderRadiusBig = "10px";
// Spacing
var spaceBig = "40px";
var spaceMed = "20";
var spaceSmall = "10px";
// Media Queries
var mediaMed = "1200px";
var mediaSmall = "900px";
var mediaTiny = "520px";


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_variables__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__colors__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_helpers__ = __webpack_require__(23);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__css_variables__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__css_variables__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__css_variables__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__css_variables__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__css_variables__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__css_variables__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "j", function() { return __WEBPACK_IMPORTED_MODULE_0__css_variables__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "k", function() { return __WEBPACK_IMPORTED_MODULE_0__css_variables__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "l", function() { return __WEBPACK_IMPORTED_MODULE_0__css_variables__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "m", function() { return __WEBPACK_IMPORTED_MODULE_0__css_variables__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__colors__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "n", function() { return __WEBPACK_IMPORTED_MODULE_1__colors__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "o", function() { return __WEBPACK_IMPORTED_MODULE_1__colors__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "p", function() { return __WEBPACK_IMPORTED_MODULE_1__colors__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "q", function() { return __WEBPACK_IMPORTED_MODULE_1__colors__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__css_helpers__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__css_helpers__["c"]; });





/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_most__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__motorcycle_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_most_combineobj__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles__ = __webpack_require__(148);
/* harmony export (immutable) */ exports["a"] = Button;




function Button(sources) {
    var button = sources.dom.select(__WEBPACK_IMPORTED_MODULE_3__styles__["a" /* button */]);
    var click$ = button.events('click');
    var styles$ = sources.styles$ || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["j" /* just */])([]);
    var data$ = sources.data$ || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_most__["j" /* just */])({});
    var children$ = sources.children$;
    var model$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_most_combineobj__["a" /* combineObj */])({ styles$: styles$, data$: data$, children$: children$ });
    var dom = model$.map(view);
    return { dom: dom, click$: click$ };
}
(function (Button) {
    Button.raised = __WEBPACK_IMPORTED_MODULE_3__styles__["b" /* raised */];
    Button.flat = __WEBPACK_IMPORTED_MODULE_3__styles__["c" /* flat */];
    Button.primary = __WEBPACK_IMPORTED_MODULE_3__styles__["d" /* primary */];
    Button.secondary = __WEBPACK_IMPORTED_MODULE_3__styles__["e" /* secondary */];
    Button.accent = __WEBPACK_IMPORTED_MODULE_3__styles__["f" /* accent */];
    Button.red = __WEBPACK_IMPORTED_MODULE_3__styles__["g" /* red */];
    Button.green = __WEBPACK_IMPORTED_MODULE_3__styles__["h" /* green */];
    Button.yellow = __WEBPACK_IMPORTED_MODULE_3__styles__["i" /* yellow */];
    Button.blue = __WEBPACK_IMPORTED_MODULE_3__styles__["j" /* blue */];
})(Button || (Button = {}));
function view(model) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__motorcycle_dom__["a" /* button */])(__WEBPACK_IMPORTED_MODULE_3__styles__["a" /* button */] + (model.styles.join('') || __WEBPACK_IMPORTED_MODULE_3__styles__["b" /* raised */] + __WEBPACK_IMPORTED_MODULE_3__styles__["d" /* primary */]), model.data, model.children);
}


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button__ = __webpack_require__(146);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Button__["a"]; });



/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_css_helpers__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_typestyle__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_typestyle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_typestyle__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return button; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return raised; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return flat; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return primary; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return secondary; });
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return accent; });
/* harmony export (binding) */ __webpack_require__.d(exports, "g", function() { return red; });
/* harmony export (binding) */ __webpack_require__.d(exports, "h", function() { return green; });
/* harmony export (binding) */ __webpack_require__.d(exports, "i", function() { return yellow; });
/* harmony export (binding) */ __webpack_require__.d(exports, "j", function() { return blue; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var button = '.' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_typestyle__["style"])(__assign({ transition: [
        "all 0.3s " + __WEBPACK_IMPORTED_MODULE_1__common__["a" /* cubic */] + ",",
        "background-size 0s " + __WEBPACK_IMPORTED_MODULE_1__common__["a" /* cubic */],
    ], minHeight: '3em', minWidth: '12em', boxShadow: "" + __WEBPACK_IMPORTED_MODULE_1__common__["b" /* boxShadowFloat */], position: 'relative', cursor: "pointer", textTransform: "uppercase", marginBottom: "" + __WEBPACK_IMPORTED_MODULE_1__common__["c" /* spaceSmall */], backgroundImage: "none", backgroundSize: 0, backgroundRepeat: "no-repeat", backgroundPosition: "50% 50%" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["d" /* willChange */])("background-size, background-image"), { padding: __WEBPACK_IMPORTED_MODULE_1__common__["c" /* spaceSmall */] + " " + __WEBPACK_IMPORTED_MODULE_1__common__["e" /* spaceMed */], display: "inline-block", fontFamily: "Roboto", border: 0, $nest: {
        '&:focus': {
            outline: "none",
            backgroundSize: "1000%",
            transition: "all 1s " + __WEBPACK_IMPORTED_MODULE_1__common__["a" /* cubic */],
        },
    } }));
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_typestyle__["cssRaw"])("\n  " + button + "::after {\n    position: absolute;\n    content: '';\n    transition: none;\n    background: radial-gradient(circle, white 95%, rgba(0,0,0,0) 95%);\n    background-size: 0.7%;\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n  }\n");
var raised = '.' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_typestyle__["style"])(__assign({ borderRadius: '1.98px', boxShadow: __WEBPACK_IMPORTED_MODULE_1__common__["f" /* boxShadowRaised */] }, btnGradient(__WEBPACK_IMPORTED_MODULE_1__common__["g" /* river */]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["d" /* willChange */])("box-shadow, background-color"), { color: 'white' }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["h" /* hover */])({
    boxShadow: __WEBPACK_IMPORTED_MODULE_1__common__["i" /* boxShadowRaisedHover */],
    backgroundColor: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_css_helpers__["a" /* shadeColor */])(__WEBPACK_IMPORTED_MODULE_1__common__["g" /* river */], 5),
})));
var flat = '.' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_typestyle__["style"])(__assign({}, btnGradient(__WEBPACK_IMPORTED_MODULE_1__common__["j" /* secondary */]), { color: 'black', backgroundColor: __WEBPACK_IMPORTED_MODULE_1__common__["k" /* bodyBackground */], boxShadow: 'none' }));
var primary = '.' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_typestyle__["style"])(__assign({}, btnGradient(__WEBPACK_IMPORTED_MODULE_1__common__["l" /* primary */]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["h" /* hover */])({
    backgroundColor: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_css_helpers__["a" /* shadeColor */])(__WEBPACK_IMPORTED_MODULE_1__common__["l" /* primary */], 5),
})));
var secondary = '.' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_typestyle__["style"])(__assign({}, btnGradient(__WEBPACK_IMPORTED_MODULE_1__common__["j" /* secondary */]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["h" /* hover */])({
    backgroundColor: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_css_helpers__["a" /* shadeColor */])(__WEBPACK_IMPORTED_MODULE_1__common__["j" /* secondary */], 5),
})));
var accent = '.' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_typestyle__["style"])(__assign({}, btnGradient(__WEBPACK_IMPORTED_MODULE_1__common__["m" /* accent */]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["h" /* hover */])({
    backgroundColor: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_css_helpers__["a" /* shadeColor */])(__WEBPACK_IMPORTED_MODULE_1__common__["m" /* accent */], 5),
})));
var red = '.' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_typestyle__["style"])(__assign({}, btnGradient(__WEBPACK_IMPORTED_MODULE_1__common__["n" /* red */]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["h" /* hover */])({
    backgroundColor: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_css_helpers__["a" /* shadeColor */])(__WEBPACK_IMPORTED_MODULE_1__common__["n" /* red */], 5),
})));
var green = '.' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_typestyle__["style"])(__assign({}, btnGradient(__WEBPACK_IMPORTED_MODULE_1__common__["o" /* green */]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["h" /* hover */])({
    backgroundColor: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_css_helpers__["a" /* shadeColor */])(__WEBPACK_IMPORTED_MODULE_1__common__["o" /* green */], 5),
})));
var yellow = '.' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_typestyle__["style"])(__assign({}, btnGradient(__WEBPACK_IMPORTED_MODULE_1__common__["p" /* yellow */]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["h" /* hover */])({
    backgroundColor: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_css_helpers__["a" /* shadeColor */])(__WEBPACK_IMPORTED_MODULE_1__common__["p" /* yellow */], 5),
})));
var blue = '.' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_typestyle__["style"])(__assign({}, btnGradient(__WEBPACK_IMPORTED_MODULE_1__common__["q" /* blue */]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["h" /* hover */])({
    backgroundColor: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_css_helpers__["a" /* shadeColor */])(__WEBPACK_IMPORTED_MODULE_1__common__["q" /* blue */], 5),
})));
function btnGradient(color) {
    return {
        backgroundImage: "radial-gradient(circle, " + color + " 1%, " + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common_css_helpers__["a" /* shadeColor */])(color, 15) + " 15%, rgba(0, 0, 0, 0) 30%)",
        backgroundColor: color,
    };
}


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button__ = __webpack_require__(147);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Button__["a"]; });



/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var formatting_1 = __webpack_require__(151);
/**
 * All the CSS types in the 'types' namespace
 */
exports.types = __webpack_require__(152);
/**
 * @module Maintains a single stylesheet and keeps it in sync with requested styles
 */
var FreeStyle = __webpack_require__(35);
/** Raf for node + browser */
var raf = typeof requestAnimationFrame === 'undefined' ? setTimeout : requestAnimationFrame;
/**
 * Only calls cb all sync operations settle
 */
var afterAllSync = (new (function () {
    function class_1() {
        var _this = this;
        this.pending = 0;
        this.afterAllSync = function (cb) {
            _this.pending++;
            var pending = _this.pending;
            raf(function () {
                if (pending !== _this.pending)
                    return;
                cb();
            });
        };
    }
    return class_1;
}())).afterAllSync;
/**
 * We have a single stylesheet that we update as components register themselves
 */
var freeStyle = FreeStyle.create();
var lastFreeStyleChangeId = freeStyle.changeId;
/**
 * We create a tag on first request or return the one that was hydrated
 */
var _a = new (function () {
    function class_2() {
        var _this = this;
        this.singletonTag = undefined;
        this.getTag = function () {
            if (!_this.singletonTag) {
                _this.singletonTag = typeof window === 'undefined' ? { textContent: '' } : document.createElement('style');
                if (typeof document !== 'undefined')
                    document.head.appendChild(_this.singletonTag);
            }
            return _this.singletonTag;
        };
        this.setTag = function (tag) {
            /** Clear any data in any previous tag */
            if (_this.singletonTag) {
                _this.singletonTag.textContent = '';
            }
            _this.singletonTag = tag;
            /** This special time buffer immediately */
            forceRenderStyles();
        };
    }
    return class_2;
}()), setTag = _a.setTag, getTag = _a.getTag;
/** Sets the target tag where we write the css on style updates */
exports.setCssTarget = setTag;
/** Checks if the style tag needs updating and if so queues up the change */
var styleUpdated = function () {
    if (freeStyle.changeId === lastFreeStyleChangeId
        && !pendingRawChange)
        return;
    lastFreeStyleChangeId = freeStyle.changeId;
    pendingRawChange = false;
    afterAllSync(forceRenderStyles);
};
var pendingRawChange = false;
var raw = '';
/**
 * Insert `raw` CSS as a string. This is useful for e.g.
 * - third party CSS that you are customizing with template strings
 * - generating raw CSS in JavaScript
 * - reset libraries like normalize.css that you can use without loaders
 */
function cssRaw(mustBeValidCSS) {
    if (!mustBeValidCSS)
        return;
    raw = raw + mustBeValidCSS;
    pendingRawChange = true;
    styleUpdated();
}
exports.cssRaw = cssRaw;
/**
 * Renders styles to the singleton tag imediately
 * NOTE: You should only call it on initial render to prevent any non CSS flash.
 * After that it is kept sync using `requestAnimationFrame` and we haven't noticed any bad flashes.
 **/
function forceRenderStyles() {
    getTag().textContent = exports.getCss();
}
exports.forceRenderStyles = forceRenderStyles;
/**
 * Helps with testing. Reinitializes FreeStyle + raw
 */
function reinit() {
    /** reinit freestyle */
    freeStyle = FreeStyle.create();
    lastFreeStyleChangeId = freeStyle.changeId;
    /** reinit raw */
    raw = '';
    pendingRawChange = false;
    /** Clear any styles that were flushed */
    getTag().textContent = '';
}
exports.reinit = reinit;
/**
 * Allows use to use the stylesheet in a node.js environment
 */
exports.getCss = function () { return raw ? raw + freeStyle.getStyles() : freeStyle.getStyles(); };
/**
 * Takes CSSProperties and return a generated className you can use on your component
 */
function style() {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    var _a = formatting_1.ensureStringObj(extend.apply(void 0, objects)), result = _a.result, debugName = _a.debugName;
    var className = debugName ? freeStyle.registerStyle(result, debugName) : freeStyle.registerStyle(result);
    styleUpdated();
    return className;
}
exports.style = style;
function fontFace() {
    var fontFace = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fontFace[_i] = arguments[_i];
    }
    for (var _a = 0, fontFace_1 = fontFace; _a < fontFace_1.length; _a++) {
        var face = fontFace_1[_a];
        freeStyle.registerRule('@font-face', face);
    }
    styleUpdated();
    return;
}
exports.fontFace = fontFace;
/**
 * Takes CSSProperties and registers it to a global selector (body, html, etc.)
 */
function cssRule(selector) {
    var objects = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        objects[_i - 1] = arguments[_i];
    }
    var object = formatting_1.ensureStringObj(extend.apply(void 0, objects)).result;
    freeStyle.registerRule(selector, object);
    styleUpdated();
    return;
}
exports.cssRule = cssRule;
/**
 * Takes Keyframes and returns a generated animation name
 */
function keyframes(frames) {
    // resolve keyframe css property helpers
    for (var key in frames) {
        var frame = frames[key];
        for (var prop in frame) {
            frame[prop] = formatting_1.ensureString(frame[prop]);
        }
    }
    var animationName = freeStyle.registerKeyframes(frames);
    styleUpdated();
    return animationName;
}
exports.keyframes = keyframes;
/**
 * Helper for you to create a CSSFunction
 * Assumption is that most css function fall into this pattern:
 * `function-name(param [, param])`
 */
function cssFunction(functionName) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    var parts = params.map(formatting_1.ensureString).join(',');
    return functionName + "(" + parts + ")";
}
exports.cssFunction = cssFunction;
/**
 * Merges various styles into a single style object.
 * Note: if two objects have the same property the last one wins
 */
function extend() {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    /** The final result we will return */
    var result = {};
    for (var _a = 0, objects_1 = objects; _a < objects_1.length; _a++) {
        var object = objects_1[_a];
        for (var key in object) {
            /** Falsy values except a explicit 0 is ignored */
            var val = object[key];
            if (!val && val !== 0) {
                continue;
            }
            /** if nested media or pseudo selector */
            if (key === '$nest' && val) {
                result[key] = result['$nest'] ? extend(result['$nest'], val) : val;
            }
            else if ((key.indexOf('&') !== -1 || key.indexOf('@media') === 0)) {
                result[key] = result[key] ? extend(result[key], val) : val;
            }
            else {
                result[key] = val;
            }
        }
    }
    return result;
}
exports.extend = extend;
/**
 * Utility to join classes conditionally
 */
function classes() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.filter(function (c) { return !!c; }).join(' ');
}
exports.classes = classes;
/**
 * Helps customize styles with media queries
 */
exports.media = function (mediaQuery) {
    var objects = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        objects[_i - 1] = arguments[_i];
    }
    var mediaQuerySections = [];
    if (mediaQuery.type)
        mediaQuerySections.push(mediaQuery.type);
    if (mediaQuery.orientation)
        mediaQuerySections.push(mediaQuery.orientation);
    if (mediaQuery.minWidth)
        mediaQuerySections.push("(min-width: " + mediaQuery.minWidth + "px)");
    if (mediaQuery.maxWidth)
        mediaQuerySections.push("(max-width: " + mediaQuery.maxWidth + "px)");
    var stringMediaQuery = "@media " + mediaQuerySections.join(' and ');
    var object = {
        $nest: (_a = {},
            _a[stringMediaQuery] = extend.apply(void 0, objects),
            _a)
    };
    return object;
    var _a;
};


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var FreeStyle = __webpack_require__(35);
function ensurePercent(value) {
    return typeof value === 'number'
        ? value
        : parseFloat(ensureString(value)) * .01;
}
exports.ensurePercent = ensurePercent;
function formatPercent(value) {
    return (value * 100) + '%';
}
exports.formatPercent = formatPercent;
/**
 * Before we send styles to freeStyle we should convert any CSSType<T> to string
 * Call this whenever something might be a CSSType.
 */
function ensureString(x) {
    return typeof x.type === 'string'
        ? x.toString()
        : x;
}
exports.ensureString = ensureString;
/**
 * We need to do the following to *our* objects before passing to freestyle:
 * - Convert any CSSType to their string value
 * - For any `$nest` directive move up to FreeStyle style nesting
 * - For any `$unique` directive map to FreeStyle Unique
 * - For any `$debugName` directive return the debug name
 */
function ensureStringObj(object) {
    /** The final result we will return */
    var result = {};
    var debugName = '';
    for (var key in object) {
        /** Grab the value upfront */
        var val = object[key];
        /** TypeStyle configuration options */
        if (key === '$unique') {
            result[FreeStyle.IS_UNIQUE] = val;
        }
        else if (key === '$nest') {
            var nested = val;
            for (var selector in nested) {
                var subproperties = nested[selector];
                result[selector] = ensureStringObj(subproperties).result;
            }
        }
        else if (key === '$debugName') {
            debugName = val;
        }
        else {
            result[key] = ensureString(val);
        }
    }
    return { result: result, debugName: debugName };
}
exports.ensureStringObj = ensureStringObj;
function parseCSSFunction(stringValue) {
    var matches = /[\s]*([a-z-]+)[\s]*\([\s]*([^\)]+)[\s]*\)[\s]*/ig.exec(stringValue);
    if (!matches || !matches.length) {
        return undefined;
    }
    return [matches[1]].concat(matches[2].split(','));
}
exports.parseCSSFunction = parseCSSFunction;


/***/ },
/* 152 */
/***/ function(module, exports) {

"use strict";
"use strict";


/***/ },
/* 153 */
/***/ function(module, exports) {

var g;

// This works in non-strict mode
g = (function() { return this; })();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ },
/* 154 */
/***/ function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			configurable: false,
			get: function() { return module.l; }
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			configurable: false,
			get: function() { return module.i; }
		});
		module.webpackPolyfill = 1;
	}
	return module;
}


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(45);


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map